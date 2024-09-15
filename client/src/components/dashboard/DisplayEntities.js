import React from "react";
import { Trash3 } from "react-bootstrap-icons";
import Spinner from "../layout/Spinner";

function DisplayEntities({ entities, setEntities, entityDisplay, loading }) {
  const removeEntity = (entity) => {
    const index = entities.indexOf(entity);
    if (index > -1) {
      setEntities(entities.filter((e, i) => i != index));
    }
  };
  if (loading) return <Spinner />;
  return (
    <div
      style={{
        padding: "15px",
        marginTop: "50px",
        display: entityDisplay ? "block" : "none",
      }}
    >
      <h3 className="row">Places to visit</h3>
      <div className="row" style={{ marginTop: "10px" }}>
        {entities.map((entity) => (
          <div className="col-lg-3 col-md-6 " style={{ marginTop: "10px" }}>
            <div className="input-group " key={entity.id}>
              <input
                type="text"
                className="form-control "
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={entity}
              />
              <div className="input-group-append ">
                <button
                  onClick={() => removeEntity(entity)}
                  className="btn btn-outline-secondary"
                  type="button"
                >
                  <Trash3 color="red" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayEntities;
