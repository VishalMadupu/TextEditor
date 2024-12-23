import React from "react";
import classNames from 'classnames'; // Corrected import statement

import TextEditor from '@/Component/Editor/Editor';

export default function Demo() {
  return (
    <div className={classNames("w-50", "bg-success")}> {/* Correct usage of classNames */}
      <TextEditor />
    </div>
  );
}
