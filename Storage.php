<?php
    $log_file_name='Storage.txt';
    $name=$_POST['s-name'];
    $source=$_POST['s-source'];
    $description=$_POST['s-description'];
    $id=$_POST['s-id'];
    $storage=json_decode(file_get_contents($log_file_name));
    $id=sizeof($storage)+1;
    
    $save=array(
        $id=array(
            'name'=>$name,
            'source'=>$source,
            'description'=>$description,
            'creator'=>'tyler',
        );
    );

    array_push($storage,$save);
        
    file_put_contents($log_file_name, json_encode($save), FILE_APPEND);
    header('Location: /');
?>