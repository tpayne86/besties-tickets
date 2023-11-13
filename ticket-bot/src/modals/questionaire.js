import { ActionRowBuilder, ModalBuilder, TextInputBuilder } from "@discordjs/builders"

export const displayQuestionaire = async (interaction, qGroup) => {

  const modal = new ModalBuilder()
  .setCustomId(`${qGroup.id}`)
  .setTitle(`Questionaire - Page ${qGroup.pageNum}`);

  const components = qGroup.questions.map((q, i) => new TextInputBuilder()
    .setCustomId(`${q.id}`)
    .setLabel(q.question)
    .setStyle(q.style)
    .setPlaceholder(q.placeholder)
  )

  const actionRows = components.map(c => new ActionRowBuilder().addComponents(c))

  modal.addComponents(...actionRows);

  await interaction.showModal(modal);

  
}

const questionPagination = () => {}


