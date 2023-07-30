import { Input, Radio, Space } from 'antd';


const SelectItem = (props) => {

  const onChange = (e) => {
    props.setItem(e.target.value);
  };

  return (
    <div className="select-item">
      <div className="select-item__wrapper">
        <Radio.Group onChange={onChange} defaultValue="">
          <Radio.Button value="Units">Units</Radio.Button>
          <Radio.Button value="CommandCards">CommandCards</Radio.Button>
          <Radio.Button value="Upgrades">Upgrades</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  )
}

export default SelectItem;