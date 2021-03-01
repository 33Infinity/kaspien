<?php
    include_once("./src/datastore/dao/ProductDAO.php");
    include_once("./src/datastore/to/ProductTO.php");

    class ProductBO
    {
        public static function Add($anAsin, $aTitle, $aPrice, $aMargin)
        {
            try
            {
                $productDAO = new ProductDAO();
                $productTO = ProductTO::New($anAsin, $aTitle, $aPrice, $aMargin);
                $productDAO->InsertOrUpdate($productTO);
                return true;
            }
            catch (Exception $e)
            {
                return false;
            }
        }

        public static function GetAll()
        {
            $productDAO = new ProductDAO();
            return $productDAO->GetAll();
        }
    }