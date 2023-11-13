import { TICKET_API_URL } from "./constants";

export const getSettings = async () => {
  const resp = await fetch(`${TICKET_API_URL}/guilds`)
  return await resp.json();
}

export  const getPanelQuestions = async ({guildId,embedId}) => {
  const resp = await fetch(`${TICKET_API_URL}/guilds/${guildId}/panel/${embedId}/questions/`);

  return await resp.json();
}

export const getPanelQuestionsByGroup = async ({guildId,embedId, qGroup}) => {
  const resp = await fetch(`${TICKET_API_URL}/guilds/${guildId}/panel/${embedId}/questions/${qgroup}`);

  return await resp.json();
}


export const postUserAnswers = async ({guildId, ticketId, userData}) => {
  const resp = await fetch(`${TICKET_API_URL}/guilds/${guildId}/tickets/${ticketId}/answers`,
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

export const getUserAnswers = async ({guildsId, ticketId}) => {
  const resp = await fetch(`${TICKET_API_URL}/guilds/${guildsId}/tickets/${ticketId}/answers`);

  return await resp.JSON();
}

export const getEmbeds = async ({guildsId}) => {
  const resp = await fetch(`${TICKET_API_URL}/guilds/${guildsId}/embeds`);

  return await resp.JSON();
}