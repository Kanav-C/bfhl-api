const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/bfhl", (req, res) => {
  res.json({
    operation_code: 1
  });
});

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;

    data.forEach(item => {
      if (!isNaN(item)) {
        let num = parseInt(item);
        sum += num;
        if (num % 2 === 0) {
          even_numbers.push(item.toString());
        } else {
          odd_numbers.push(item.toString());
        }
      } else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    });

    let reversed = alphabets.slice().reverse().join("");
    let concatenated_alphabets = "";
    for (let i = 0; i < reversed.length; i++) {
      concatenated_alphabets += i % 2 === 0 
        ? reversed[i].toUpperCase() 
        : reversed[i].toLowerCase();
    }

    res.json({
      is_success: true,
      user_id: "kanav_chatley_14082004",
      email: "chatleykanav@gmail.com",
      roll_number: "22BAI1154",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concatenated_alphabets
    });

  } catch (error) {
    res.status(400).json({
      is_success: false,
      message: "Invalid input"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
