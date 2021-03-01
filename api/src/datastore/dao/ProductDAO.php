<?php
    include("./src/datastore/dao/BaseDAO.php");
    include("./src/datastore/CommandParameter.php");
    include("./src/datastore/to/ProductTO.php");

    class ProductDAO extends BaseDao
    {
        function AddQueryItem($queryItem)
        {
            array_push($this->QueryItems, $queryItem);
        }
        
        function AddFilter($filter)
        {
            array_push($this->Filters, $filter);
        }

        function AddCommandParameter($type, $value)
        {
            $commandParameter = new CommandParameter($type, $value);
            array_push($this->CommandParameters, $commandParameter);
        }

        function InsertOrUpdate($to)
        {
            $this->Connect();
            $product = $this->FindByAsinId($to->GetASIN());
            $columns = [ProductTO::ASIN, ProductTO::TITLE, ProductTO::PRICE, ProductTO::MARGIN];
            $values = [$to->GetASIN(), $to->GetTitle(), $to->GetPrice(), $to->GetMargin()];
            if(count($product)==0)
            {
                $this->Insert($columns, $values, ProductTO::TABLENAME);
            }
            else
            {
                $this->AddFilter(sprintf("%s=?", ProductTO::ASIN));
                $this->AddCommandParameter("s", $to->GetASIN());
                $this->Update($columns, $values, ProductTO::TABLENAME);
            }
            $this->CleanUp();
        }

        function GetAll()
        {
            $this->Connect();
            return $this->SelectRaw("select * from product");
            $this->CleanUp();
        }

        function FindByAsinId($anId)
        {
            $this->AddQueryItem(ProductTO::ASIN);
            $this->AddFilter(sprintf("%s=?", ProductTO::ASIN));
            $this->AddCommandParameter("s", $anId);
            return $this->Select(ProductTO::TABLENAME);
        }
    }