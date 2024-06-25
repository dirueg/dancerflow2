import React, { useEffect, useRef, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

import * as posenet from "@tensorflow-models/posenet";
import { poseSimilarity } from "posenet-similarity";

// For more detailed Posenet setup, please refer its own document.
async function estimatePoseOnImage(imageElement) {
  // Load the posenet model from a checkpoint
  const net = await posenet.load();
  // Estimate the pose on the imageElement
  const pose = await net.estimateSinglePose(imageElement);
  return pose;
}

// Id	Part
// 0	nose
// 1	leftEye
// 2	rightEye
// 3	leftEar
// 4	rightEar
// 5	leftShoulder
// 6	rightShoulder
// 7	leftElbow
// 8	rightElbow
// 9	leftWrist
// 10	rightWrist
// 11	leftHip
// 12	rightHip
// 13	leftKnee
// 14	rightKnee
// 15	leftAnkle
// 16	rightAnkle

const options = {
  customWeight: {
    mode: "multiply",
    scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
};

function App() {
  const [similarity, setSimilarity] = useState(0);
  const canvas1Ref = useRef(null);
  const canvas2Ref = useRef(null);

  useEffect(() => {
    const pose1ImageElement = document.getElementById("pose1");
    const pose2ImageElement = document.getElementById("pose2");

    Promise.all([
      estimatePoseOnImage(pose1ImageElement),
      estimatePoseOnImage(pose2ImageElement),
    ]).then((poses) => {
      // 카와이하게 그림을 그려볼거에요

      const canvas1Ele = canvas1Ref.current;
      canvas1Ele.width = canvas1Ele.clientWidth;
      canvas1Ele.height = canvas1Ele.clientHeight;

      const canvas2Ele = canvas2Ref.current;
      canvas2Ele.width = canvas2Ele.clientWidth;
      canvas2Ele.height = canvas2Ele.clientHeight;

      var ctx = [canvas1Ele.getContext("2d"), canvas2Ele.getContext("2d")];

      for (var i = 0; i < 2; i++) {
        ctx[i].beginPath();
        ctx[i].strokeStyle = "#FF00FF";
        ctx[i].lineWidth = 2;

        ctx[i].moveTo(
          poses[i]["keypoints"][0].position.x,
          poses[i]["keypoints"][0].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][1].position.x,
          poses[i]["keypoints"][1].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][1].position.x,
          poses[i]["keypoints"][1].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][2].position.x,
          poses[i]["keypoints"][2].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][2].position.x,
          poses[i]["keypoints"][2].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][0].position.x,
          poses[i]["keypoints"][0].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][1].position.x,
          poses[i]["keypoints"][1].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][2].position.x,
          poses[i]["keypoints"][2].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][3].position.x,
          poses[i]["keypoints"][3].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][4].position.x,
          poses[i]["keypoints"][4].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][5].position.x,
          poses[i]["keypoints"][5].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][6].position.x,
          poses[i]["keypoints"][6].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][5].position.x,
          poses[i]["keypoints"][5].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][7].position.x,
          poses[i]["keypoints"][7].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][7].position.x,
          poses[i]["keypoints"][7].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][9].position.x,
          poses[i]["keypoints"][9].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][6].position.x,
          poses[i]["keypoints"][6].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][8].position.x,
          poses[i]["keypoints"][8].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][8].position.x,
          poses[i]["keypoints"][8].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][10].position.x,
          poses[i]["keypoints"][10].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][11].position.x,
          poses[i]["keypoints"][11].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][12].position.x,
          poses[i]["keypoints"][12].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][11].position.x,
          poses[i]["keypoints"][11].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][5].position.x,
          poses[i]["keypoints"][5].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][12].position.x,
          poses[i]["keypoints"][12].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][6].position.x,
          poses[i]["keypoints"][6].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][11].position.x,
          poses[i]["keypoints"][11].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][13].position.x,
          poses[i]["keypoints"][13].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][13].position.x,
          poses[i]["keypoints"][13].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][15].position.x,
          poses[i]["keypoints"][15].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][12].position.x,
          poses[i]["keypoints"][12].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][14].position.x,
          poses[i]["keypoints"][14].position.y
        );

        ctx[i].moveTo(
          poses[i]["keypoints"][14].position.x,
          poses[i]["keypoints"][14].position.y
        );
        ctx[i].lineTo(
          poses[i]["keypoints"][16].position.x,
          poses[i]["keypoints"][16].position.y
        );

        ctx[i].stroke();
      }

      // console.log(poses[1])
      // console.log(poses[i]['keypoints'][0]['position']['x'])
      // Calculate the weighted distance between the two poses
      const weightedDistance = poseSimilarity(poses[0], poses[1], options);
      console.log(weightedDistance);
      const pose_score = 100 - weightedDistance * 100;
      console.log(pose_score);
      setSimilarity(pose_score);
    });
  });

  return (
    <div className="App">
      {similarity == 0 ? <h1>연산중입니다.</h1> : <h1>유사도 : {similarity}</h1>}
      <div style={{ display: 'flex'}}>
        <div style={{}}>
          <canvas
            width="500"
            height="1000"
            style={{ position: "absolute", zIndex: 9 }}
            ref={canvas1Ref}
          />
          <img src={img1} id="pose1" width="500" style={{ zIndex: 1 }} />
        </div>
        <div style={{flex: 1}}>
          <canvas
            width="500"
            height="1000"
            style={{ position: "absolute", zIndex: 9 }}
            ref={canvas2Ref}
          />
          <img src={img2} id="pose2" width="500" style={{ zIndex: 1 }} />
        </div>
      </div>
    </div>
  );
}

export default App;
