import "./switchButton.css";
const SwitchButton = (props) => {
  return (
    <div className="button-switch">
      <input type="checkbox" id="switch-orange" className="switch" {...props} />
      <label htmlFor="switch-orange" className="lbl-off">
        Off
      </label>
      <label htmlFor="switch-orange" className="lbl-on">
        On
      </label>
    </div>
  );
};

export default SwitchButton;
