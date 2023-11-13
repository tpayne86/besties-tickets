import { TICKET_API_URL } from "./constants";

export const getSettings = async () => {
  const resp = await fetch(`${TICKET_API_URL}/servers`)
  return await resp.json();
}

export  const getPanelQuestions = async ({serverId,embedId}) => {
  const resp = await fetch(`${TICKET_API_URL}/servers/${serverId}/panel/${embedId}/questions/`);

  return await resp.json();
}

export const getPanelQuestionsByGroup = async ({serverId,embedId, qGroup}) => {
  const resp = await fetch(`${TICKET_API_URL}/servers/${serverId}/panel/${embedId}/questions/${qgroup}`);

  return await resp.json();
}


export const postUserAnswers = async ({serverId, ticketId, userData}) => {
  const resp = await fetch(`${TICKET_API_URL}/servers/${serverId}/tickets/${ticketId}/answers`,
    {  
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        "Content-Type": 'application/json'
      },
      redirect: "follow",
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(userData)
    }
  );

  return await resp.json();
}

export const getUserAnswers = async ({serverId, ticketId}) => {
  const resp = await fetch(`${TICKET_API_URL}/servers/${serverId}/tickets/${ticketId}/answers`);

  return await resp.JSON();
}

export const getEmbeds = async ({serverId}) => {
  const resp = await fetch(`${TICKET_API_URL}/servers/${serverId}/embeds`);

  return await resp.JSON();
}