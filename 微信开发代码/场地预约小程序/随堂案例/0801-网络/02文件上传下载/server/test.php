<?php
$file = "./".$_FILES['file']['name'];
move_uploaded_file($_FILES['file']['tmp_name'], $file);
echo "上传成功";