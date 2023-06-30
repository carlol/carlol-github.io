function copyEvent(id)
{
	var copyText = document.getElementById(id).value;
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices
	navigator.clipboard.writeText(copyText.value);
}