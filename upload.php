<?php

        if (!isset($_FILES)) {

            header("Content-Type: application/json");
            echo json_encode([
                'status'=>401,
                'message'=>'failed',
                'files'=>[]
            ]);
            exit();
        }


        $target='md';
        $files=[];
            if ($target[strlen($target)-1]!='/') {
                $target=$target.'/';
            }
            foreach ($_FILES as $file) {
                array_push($files,$file['name']);
                $temp=$target;
                $tmp=$file['tmp_name'];
                $temp=$temp.basename($file['name']);
                move_uploaded_file($tmp, $temp);
                $temp='';
                $tmp='';
            }


            header("Content-Type: application/json");
            echo json_encode([
                'status'=>200,
                'message'=>'Success',
                'files'=>$files
            ]);
            exit();
