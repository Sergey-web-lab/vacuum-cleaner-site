$(document).ready((function(){let e="02142b0a1563ca36d6d1e7601196ee1b2a9d4ad0";$("#inputAddress").suggestions({token:e,type:"ADDRESS",onSelect:function(e){console.log(e)}}),$("#inputNameAndSurname").suggestions({token:e,type:"NAME",onSelect:function(e){console.log(e.value)}})}));