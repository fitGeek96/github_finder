import React from "react";
import useAlertContext from "../../context/alert/AlertContext";
import { FaRegWindowClose } from "react-icons/fa";

function Alert() {
  const { alert } = useAlertContext();

  return (
    alert !== null && (
      <p className="flex item-start mb-4 space-x-2">
        {alert.type === "error" && (
          <FaRegWindowClose className="mt-1" color="red" size={20} />
        )}

        <p className="flex-1 text-base font-semibold leading-7 text-white">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
}

export default Alert;
