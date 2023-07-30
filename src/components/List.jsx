import axios from "axios"
import { useEffect, useState } from "react";

const List = (props) => {
  const [list, setList] = useState([]);
  const [isListLoading, setIsListLoading] = useState(false);

  useEffect(() => {
    setIsListLoading(true);
    axios.get(`https://swl-manager.onrender.com/${props.faction}/${props.item}`)
      .then((response) => {
        try {
          setList(response.data);
        }
        catch (e) {
          console.log('server dont ansver');
        }
      })
      .finally(() => { setIsListLoading(false) });
  }, [props.faction, props.item]);

  return <div className="">
    <div className="list">
      <div className="list__wrapper">
        {props.item === 'Units' && isListLoading === false ? <>
          <div className="list__inner">
            <div className="list__exp-num">
              №
            </div>
            <div className="list__type">
              Type
            </div>
            <div className="list__item">
              Name
            </div>
          </div>
          {list.map((el, key) =>
            <div className="list__inner" key={key}>
              <div className="list__exp-num">
                {el.expNum}
              </div>
              <div className="list__type">
                {el.type}
              </div>
              <div className="list__item" key={key}>
                <a href={el.link} className="list__link">
                  {el.name}
                </a>
              </div>
            </div>
          )} </>
          : props.item === 'Units' && isListLoading === true ? <div className="list__inner">
            <img src={require("../images/loading.gif")} alt="" className="list__loading-img" />
          </div>
            : <></>
        }
        {props.item === 'CommandCards' && isListLoading === false ? <>
          <div className="list__inner">
            <div className="list__exp-num">
              №
            </div>
            <div className="list__leader">
              Leader
            </div>
            <div className="list__item">
              Name
            </div>
          </div>
          {list.map((el, key) =>
            <div className="list__inner" key={key}>
              <div className="list__exp-num">
                {el.expNum}
              </div>
              <div className="list__leader">
                {el.leader}
              </div>
              <div className="list__item" key={key}>
                <a href={el.link} className="list__link">
                  {el.name}
                </a>
              </div>
            </div>
          )}</>
          : props.item === 'CommandCards' && isListLoading === true ? <div className="list__inner">
            <img src={require("../images/loading.gif")} alt="" className="list__loading-img" />
          </div>
            : <></>
        }
        {props.item === 'Upgrades' && isListLoading === false ? <>
          <div className="list__inner">
            <div className="list__date">
              Date
            </div>
            <div className="list__type">
              Type
            </div>
            <div className="list__item">
              Name
            </div>
            <div className="list__restrictions">
              Restrictions
            </div>
          </div>
          {list.map((el, key) =>
            <div className="list__inner" key={key}>
              <div className="list__date">
                {el.date}
              </div>
              <div className="list__type">
                {el.type}
                {/* <img
                       src={require(`../images/${el.type}.webp`)}
                        src={`../images/${el.type}.webp`}
                       alt="shit"
                       height="20"
                       width="20"
                     /> */}
              </div>
              <div className="list__item" key={key}>
                <a href={el.link} className="list__link">
                  {el.name}
                </a>
              </div>
              <div className="list__restrictions">
                {el.restrictions}
              </div>
            </div>
          )} </>
          : props.item === 'Upgrades' && isListLoading === true ? <div className="list__inner">
            <img src={require("../images/loading.gif")} alt="" className="list__loading-img" />
          </div>
            : <></>}




        {/*  {list.map((el, key) => <div className="list__item" key={key}>
           <a href={el.link} className="list__link">
             {el.name}
           </a>
         </div>)} */}
      </div>
    </div>
  </div >
}

export default List