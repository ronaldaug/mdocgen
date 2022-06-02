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

                $file_name = $file['name'];

                if ($file_name === 'README.md' || $file_name === 'readme.md') {
                    $file_name = 'index.md';
                }

                array_push($files,$file_name);
                $temp=$target;
                $tmp=$file['tmp_name'];
                $temp=$temp.basename($file_name);
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
