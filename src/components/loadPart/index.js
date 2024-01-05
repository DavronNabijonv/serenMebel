import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

export default function LoadPart() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className={styles.container}>
          <p className="animate__animated animate__jackInTheBox animate__infinite animate__alternate">
            SerenMebel
          </p>
        </div>
      )}
    </>
  );
}
