import { NFT } from "@thirdweb-dev/sdk";
import React from "react";
import styles from "../styles/Gameplay.module.css";
import Image from "next/image";

const GoldGem = (
  <div className={styles.slide}>
    <Image src="/a.png" height="48" width="48" alt="gold-gem" />
  </div>
);

type Props = {
  pickaxe: NFT | undefined;
};

export default function GameplayAnimation({ pickaxe }: Props) {
  if (!pickaxe) {
    return <div style={{ marginLeft: 8 }}>I need a pickaxe!</div>;
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
      </div>
    </div>
  );
}
