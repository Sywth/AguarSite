// // "use client";
// // import { useQuery } from "@tanstack/react-query";
// // import React, { useState } from "react";

// // type HitScreenProps = React.HTMLProps<HTMLDivElement> & {};

// // const HitScreen: React.FC<HitScreenProps> = ({}) => {
// //   const [numbersHit, setNumbersHit] = useState<number[]>([]);
// //   const { data, isLoading } = useQuery({
// //     queryKey: ["hit-screen"],
// //     queryFn: async () => {
// //       // implement this
// //     },
// //   });

// //   return (
// //     <div>
// //       <div className="text-4xl py-16">Hit Screen</div>
// //       <div>{numbersHit}</div>
// //     </div>
// //   );
// // };

// // export default HitScreen;

// "use client";
// import React, { useState, useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { set } from "react-hook-form";
// type HitScreenProps = React.HTMLProps<HTMLDivElement> & {};

// const HitScreen: React.FC<HitScreenProps> = ({}) => {
//   const [numbersHit, setNumbersHit] = useState<number[]>([0]);
//   const [greeting, setGreeting] = useState<string>("Null");
//   useQuery({
//     queryKey: ["greeting"],
//     queryFn: async () => {
//       const response = await fetch("http://127.0.0.1:8000/hello-route/tyler");
//       const data = await response.json();
//       setGreeting(JSON.stringify(data));
//     },
//   });

//   // Proof of concept for streaming data
//   // TODO : Implement a better way to handle streaming data
//   // TODO : Then stream the actual data we want
//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         "http://127.0.0.1:8000/stream-numbers/5/800"
//       );
//       if (!response.body) {
//         throw new Error("No response body");
//       }
//       const reader = response.body.getReader();
//       let response_string: string = "";
//       const decoder = new TextDecoder();
//       while (true) {
//         const chunk = await reader.read();
//         if (chunk.done) {
//           break;
//         }
//         const val = decoder.decode(chunk.value);
//         console.log("Chunk val : ", val);
//         response_string += val;
//       }
//       console.log("Ascii data : ", response_string);
//     }
//     fetchData();
//   }, []);

//   // useQuery({
//   //   queryKey: ["numbers"],
//   //   queryFn: async () => {
//   //     const response = await fetch("http://127.0.0.1:8000/stream-numbers/0/10");
//   //   },
//   // });

//   // useEffect(() => {
//   //   const eventSource = new EventSource(
//   //     "http://127.0.0.1:8000/stream-numbers/0/1000"
//   //   );

//   //   eventSource.onmessage = (event) => {
//   //     console.log("Received event", event);
//   //     setNumbersHit((prevNumbers) => [...prevNumbers, parseInt(event.data)]);
//   //   };

//   //   eventSource.onerror = () => {
//   //     console.error("EventSource failed.");
//   //     eventSource.close();
//   //   };

//   //   // Cleanup on unmount
//   //   return () => {
//   //     eventSource.close();
//   //   };
//   // }, []);

//   return (
//     <div>
//       <div className="text-4xl py-16">{greeting}</div>
//       <div>
//         {numbersHit.map((number, index) => (
//           <div key={index}>{number}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HitScreen;

const HitScreen = ({}) => {
  return <></>;
};
export default HitScreen;
