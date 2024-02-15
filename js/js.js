function popup(x)

{
	document.getElementById('popup'+x).style.display='block';
	document.getElementById('fade'+x).style.display='block';
}

function popupclose(x)
{
	document.getElementById('popup'+x).style.display='none';
	document.getElementById('fade'+x).style.display='none';	
}

var newitem = ''
	function addcart(x)
	{
		document.getElementById('input').innerHTML += x;
		newitem += x;
	}

	function displaycart()
	{
		document.getElementById('output').innerHTML +="<br>" + newitem;
		newitem = '';
		document.getElementById('input').innerHTML = '';
		document.getElementById('cart').style.display='block';
	}