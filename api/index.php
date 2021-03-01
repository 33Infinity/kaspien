<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    include_once("./src/businessLayer/ProductBO.php");
    include_once("./src/APIError.php");
    
    //Currently only doing one get and one post. Would need to branch on specific endpoint if this grows
    switch($_SERVER['REQUEST_METHOD'])
    {
        case 'GET': {
            try
            {
                $results = ProductBO::GetAll();
                echo json_encode($results);
            }
            catch(Exception $e)
            {
                echo json_encode(Error::New("Failed to get products"));
            }
        }; 
        break;
        case 'POST': {
            $data = json_decode(file_get_contents("php://input"), true);
            $errorOccurred = false;
            foreach ($data as &$value) {
                $result = ProductBO::Add($value["ASIN"], $value["Title"], $value["Price"], $value["Margin"]);
                if(!$result)
                {
                    $errorOccurred = true;
                    echo json_encode(Error::New("Failed to save"));
                    break;
                }
            }
            if(!$errorOccurred)
            {
                echo json_encode("Success");
            }
        }; 
        break;
    }
    