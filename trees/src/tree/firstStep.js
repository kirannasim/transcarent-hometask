import "./index.css";

export default function firstStepTree() {
  return (
    <div className="tree">
      <ul>
        <li>
          <p>root</p>
          <ul>
            <li><p>ant</p></li>
            <li>
                <p>bear</p>
                <ul>
                  <li><p>cat</p></li>
                  <li>
                    <p>dog</p>
                    <ul>
                      <li><p>elephant</p></li>
                    </ul>
                  </li>
                </ul>
            </li>
            <li><p>frog</p></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
