<?php

    class ProductTO
    {
        public const TABLENAME = "product";
        public const ROWID = "row_id";
        public const DATETIMEINSERT = "datetime_insert";
        public const ASIN = "asin";
        public const TITLE = "title";
        public const PRICE = "price";
        public const MARGIN = "margin";
       
        private $_row_id;
        private $_datetime_insert;
        private $_asin;
        private $_title;
        private $_price;
        private $_margin;

        private function __construct($anAsin, $aTitle, $aPrice, $aMargin)
        {
            $this->_asin = $anAsin;
            $this->_title = $aTitle;
            $this->_price = $aPrice;
            $this->_margin = $aMargin;
        }

        public static function New($anAsin, $aTitle, $aPrice, $aMargin)
        {
            return new ProductTO($anAsin, $aTitle, $aPrice, $aMargin);
        }

        public function GetASIN()
        {
            return $this->_asin;
        }

        public function GetTITLE()
        {
            return $this->_title;
        }

        public function GetPrice()
        {
            return $this->_price;
        }

        public function GetMargin()
        {
            return $this->_margin;
        }


    }