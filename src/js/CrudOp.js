import { useState } from "react";

const CrudOp = (props) => {
  const [header, setHeader] = useState("");

  const [db, setDb] = useState([]);
  const [updataField, setUpdateField] = useState("");
  const [conditionalVisibleİnputField, setConditionalVisibleİnputField] =
    useState(false);
  const [updateIndex, setUpdateIndex] = useState();

  return (
    <div>
      <h1>{header}</h1>

      <input
        onChange={(e) => {
          setHeader(e.target.value);
        }}
        value={header}
      ></input>
      {/* add item to db */}
      <button
        onClick={(e) => {
          e.preventDefault();
          if (header.trim() === "") {
          } else {
            setDb([...db, header]); //e.target.value kullanmadan headerı kullanmak sıkıntı mı sor state ayarlamak için
          }

          setHeader("");
        }}
      >
        submit
      </button>
      {/* add item to db */}

      {/* db list */}
      <ul>
        {db.map((item, index) => (
          <li key={index}>
            {item + " "}

            {/* Delete item from db */}
            <button
              onClick={() => {
                setDb(
                  db.filter((ite, inx) => {
                    return index !== inx;
                  })
                );
                setConditionalVisibleİnputField(false);
              }}
            >
              X
            </button>
            {/* Delete item from db */}

            {/*Conditional Update Section */}
            {conditionalVisibleİnputField && index === updateIndex && (
              <span>
                <input
                  value={updataField}
                  onChange={(e) => {
                    setUpdateField(e.target.value);
                  }}
                ></input>

                <button
                  onClick={() => {
                    let updatedArr = db.map((updateItem, updateItemIndex) => {
                      if (
                        index === updateItemIndex &&
                        updataField.trim() !== ""
                      ) {
                        updateItem = updataField;
                        return updateItem;
                      } else {
                        return updateItem;
                      }
                    });

                    setDb(updatedArr);
                    setUpdateField("");
                    setUpdateIndex(null);
                    setConditionalVisibleİnputField(false);
                  }}
                >
                  change
                </button>
              </span>
            )}
            {/*Conditional Update Section */}

            {/* Update Button */}
            {!conditionalVisibleİnputField && (
              <button
                onClick={(params) => {
                  setConditionalVisibleİnputField(true);
                  setUpdateIndex(index);
                }}
              >
                Update
              </button>
            )}
            {/* Update Button */}
          </li>
        ))}
      </ul>
      {/* db list */}
    </div>
  );
};

export default CrudOp;
