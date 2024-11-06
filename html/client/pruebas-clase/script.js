localStorage.setItem('frutafav', 'patata');
localStorage.getItem('frutafav');
sessionStorage.setItem('animalfav', 'perro');
sessionStorage.getItem('animalfav');
navigator.getBattery().then((bat) => {
	console.log(bat);
});
window.Notification.requestPermission();
new Notification('Funciona en mi Navegador!');
navigator.geolocation.getCurrentPosition(console.table);

document.title = 'Dan Farrik!';
alert(document.URL);
document.images[0];
document.cookie;
