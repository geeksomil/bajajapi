import express from "express";

const router = express.Router();

router.route("/").post((req, res) => {
  try {
    const { data } = req.body;
    const dataArr = [];
    const evenArr = [];
    const oddArr = [];
    const alpha = [];
    if (data.length === 0)
      res.status(400).send({
        is_success: false,
        message: "Sent data incorrect",
      });

    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i])) {
        alpha.push(data[i].toUpperCase());
      } else if (parseInt(data[i]) % 2 == 0) {
        evenArr.push(data[i]);
      } else {
        oddArr.push(data[i]);
      }
    }

    const createData = {
      is_success: true,
      user_id: "somil_gambhir_08_07_2003",
      roll_number: "2110991378",
      email: "somil1378.be21@chitkara.edu.in",
      evenArr: evenArr,
      oddArr: oddArr,
      alpha: alpha,
    };

    res.status(200).send(createData);
  } catch (err) {
    res.status(500).send({
      is_success: false,
      message: "Internal server error",
    });
  }
});

export default router;
