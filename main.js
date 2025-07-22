

const btn = document.querySelector('.click-button');
const ayah = document.querySelector('.ayah');
const surah = document.querySelector('.surah');
const ayahNum = document.querySelector('.num-ayah');

btn.addEventListener('click', () => {
  getAyah();
});

async function getAyah() {
   try{ 
    const verseNumber = Math.floor(Math.random() * 6236) + 1;
    const response = await fetch(`http://api.alquran.cloud/v1/ayah/${verseNumber}`);
    let data = await response.json(); 

    ayah.innerHTML = data.data.text;
    surah.innerHTML = data.data.surah.name;
    ayahNum.innerHTML =  ' الآية ' + data.data.numberInSurah ;
    
  } catch (error) {
    alert('Error');
  }

}
