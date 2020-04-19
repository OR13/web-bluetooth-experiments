import React from "react";

function App() {
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    setTimeout(async () => {
      let device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        // filters: [
        //   {
        //     services: ["0x13333333333333333333333333333337"],
        //   },
        // ],
      });
      console.log(device);
      let server = await device.gatt.connect();
      // let service = await server.getPrimaryService("battery_service");
      // let characteristic = await service.getCharacteristic("battery_level");
      // setInterval(async ()=>{
      //     let value = await characteristic.readValue();
      //     let batteryLevel = value.getUint8(0);
      //     setState({
      //       batteryLevel
      //     })
      // }, 1 * 1000);
    }, 1 * 1000);
  }, []);
  return (
    <div className="App">
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
