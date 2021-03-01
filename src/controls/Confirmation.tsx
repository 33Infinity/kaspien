import { confirmAlert } from "react-confirm-alert";

export async function confirmWithSingleButton(
  aButtonConfirmLabel: string,
  aTitle: string,
  aMessage: string
) {
  let result = false;
  await confirmAlert({
    title: aTitle,
    message: aMessage,
    buttons: [
      {
        label: aButtonConfirmLabel,
        onClick: () => null,
      },
    ],
  });
  return result;
}
