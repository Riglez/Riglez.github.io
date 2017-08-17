<?php 
  // php能不能写 字符串
  // 写JSON格式的字符串

  // echo '{"name":"jack","wife":"rose"}';

  // 读取JSON数据
  $jsonString = file_get_contents('./data/stars.json');

  // 返回读取的json数据
  echo $jsonString;

 ?>