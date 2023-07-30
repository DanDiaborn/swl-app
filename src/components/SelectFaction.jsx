import { Input, Radio, Space } from 'antd';
import { useState } from 'react';


const SelectFaction = (props) => {

  const defaultSize = [80, 80];

  const chosenSize = [100, 100];
  const [size, setSize] = useState({ Rebel: chosenSize, Empire: defaultSize });

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    props.setfaction(e.target.value);
    switch (e.target.value) {
      case 'Rebel':
        setSize({ Rebel: chosenSize, Empire: defaultSize });
        break;
      case 'Empire':
        setSize({ Rebel: defaultSize, Empire: chosenSize });
        break;
      default:
        break;
    }
  };

  return <div className="factions">
    <div className="factions__wrapper">
      <Radio.Group className="radio-custom" onChange={onChange} value={props.faction}>
        <Radio value="Rebel">
          <div className="factions__img-wrapper">
            <img className="factions__img"
              alt=" "
              width={size.Rebel[0]}
              height={size.Rebel[1]}
              src={require("../images/rebel-icon.png")}
            />
          </div>
        </Radio>
        <Radio value="Empire" className="factions__img">
          <div className="factions__img-wrapper">
            <img className="factions__img"
              alt=" "
              width={size.Empire[0]}
              height={size.Empire[1]}
              src={require("../images/empire-icon.png")}
            />
          </div>
        </Radio>
      </Radio.Group>
    </div>
  </div>
}

export default SelectFaction