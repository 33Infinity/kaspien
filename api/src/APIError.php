<?php
    class APIError
    {
        public $ErrorMessage;

        private function __construct($anErrorMessage)
        {
            $this->ErrorMessage = $anErrorMessage;
        }

        public static function New($anErrorMessage)
        {
            return new APIError($anErrorMessage);
        }
    }