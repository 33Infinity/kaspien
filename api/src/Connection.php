<?php
    class Connection
    {
        public static function url()
        {
            $url="localhost";
            return $url;
        }
        public static function user()
        {
            $user="root";
            return $user;
        }
        public static function pass()
        {
            $pass="";
            return $pass;
        }
        public static function dbName()
        {
            $dbName="kaspien";
            return $dbName;
        }
    }