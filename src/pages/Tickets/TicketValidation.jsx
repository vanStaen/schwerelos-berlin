import React from "react";
import { useParams } from "react-router-dom";

export const TicketValidation = () => {
  let { ticketId } = useParams();
  return <>Your ticket UUid number is : {ticketId}</>;
};