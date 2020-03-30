import React, { useEffect, useState } from "react";
import graphClient from "../graphql";

export default (props: React.PropsWithChildren<{}>) => {
  const [accountId, setAccountId] = useState<string>("");
  useEffect(() => {
    graphClient.query({
      query: `{
      playerInfo(parameters: {
        accountId: "530070685"
      }) {
      accountId
      createdAt
      hiddenProfile
      lastBattleTime
      levelingPoints
      levelingTier
      logoutAt
      nickname
      }  
      }`
    }).then(player =>
      setAccountId(player.data.data.playerInfo[0].accountId));
  }, []);

  return <div>{accountId}</div>;
}
