async function fetchData() {
    const res = await fetch ("https://www.hpb.health.gov.lk/api/get-current-statistical");
    const record = await res.json();
    console.log('working')
    console.log(record);
    document.getElementById("date").innerHTML=record.data.update_date_time;
    document.getElementById("Gdeaths").innerHTML=record.data.global_deaths;
    document.getElementById("Ldeaths").innerHTML=record.data.local_deaths;
    document.getElementById("Gcases").innerHTML=record.data.global_total_cases;
    document.getElementById("Lcases").innerHTML=record.data.local_total_cases;

}
fetchData();