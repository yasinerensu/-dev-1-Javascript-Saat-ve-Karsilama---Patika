


// Prompt ile kullanıcıdan isim alın
var userName = prompt("Adınızı girin:");

// "myName" id'li HTML elementini bulun
var myNameElement = document.getElementById("myName");

// Kullanıcının girdiği ismi sayfada görüntüleyin
myNameElement.textContent = userName;

// Saat ve tarih bilgisi almak için bir fonksiyon oluşturun
function showTime() {
  var now = new Date();
  var clockElement = document.getElementById("myClock");

  // Saat ve tarih bilgisini oluşturun
  var timeString = now.toLocaleTimeString();
  var dateString = now.toLocaleDateString();

  // Saat ve tarih bilgisini HTML elementlerine yazdırın
  clockElement.innerHTML = `Saat: ${timeString} - Tarih: ${dateString}`;
}

// Sayfa yüklendiğinde saat ve tarih bilgisini gösterin
showTime();

// Saati her saniye güncelleyin
setInterval(showTime, 1000);