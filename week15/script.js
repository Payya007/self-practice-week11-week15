// 1) new Date() → เวลา "ตอนนี้" แบบ UTC (แสดงเป็น Z)
const today1 = new Date();
console.log("new Date()", today1); 
// 2025-11-19T02:30:53.178Z  ← UTC

// 2) Date.now() → เวลา ณ ปัจจุบัน (ms) แล้วสร้าง Date จากมัน
const now = new Date(Date.now());
console.log("new Date(Date.now()), ",now);
// 2025-11-19T02:32:25.426Z

// 3) สร้างจาก date-string
const myDate1 = new Date("2025-05-02T17:15:35.100");
console.log(`new Date("2025-05-02T17:15:35.100") ,`,myDate1); 
// ไม่มี Z มันจะแปลงจากบ้านนเราคือ  บ้านเรา = UTC+7   มันก็เลย -7 แปลงให้เป็นค่า UTC ดิบๆ เหมือนเดิมเก็บเข้าไป

const myDate2 = new Date("2025-05-02T17:15:35.100Z");
console.log(`new Date("2025-05-02T17:15:35.100Z") ,`,myDate2);
// เก็บเป็น UTC ตรง ๆ ไม่แปลง

//4. input parameter - year, monthIndex (0-11), day, hh,mm,ss, ms
const myDate3 = new Date(2025, 1, 2, 18, 15, 0, 150)
console.log(`new Date(2025, 1, 2, 18, 15, 0, 150) ,`,myDate3) //2025-02-02T11:15:00.150Z

//Date Format
//1. toString()
// show เป็น ICT คือ เหมือน เป็น โซนเวลา ไม่ใช่  reagion 
console.log(myDate3.toString()) //Sun Feb 02 2025 18:15:00 GMT+0700 (Indochina Time)

//2. toISOString()
console.log(myDate3.toISOString()) //2025-02-02T11:15:00.150Z
const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

const localTime = myDate3.toLocaleString("en-US", { timeZone: tz });

const result = `${localTime} (${tz})`;

console.log(result);

// ยึดตามที่เราอยู่อะ 

console.log("-------")
//3. toLocaleString()
console.log(myDate3.toLocaleString()) //2/2/2025, 6:15:00 PM
console.log(
  myDate3.toLocaleString("th-TH", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Asia/Bangkok",
  })
) //2/2/68 18:15
//4. Intl.DateTimeFormat()
const formatter = Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Asia/Bangkok",
})
console.log(formatter.format(myDate3)) //2/2/25, 6:15 PM
 
//resolvedOption()
const userPreference = Intl.DateTimeFormat().resolvedOptions()
console.log(userPreference.timeZone) //Asia/Bangkok
console.log(userPreference.locale) //en-US

// สรุปปปปป

 