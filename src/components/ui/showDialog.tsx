import React from "react";
import { View, Text } from "react-native";
import { Dialog } from "./Dialog";
import Button from "./Button";

type ShowDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  disabled?: boolean;
};

const ShowDialog = ({
  open,
  setOpen,
  trigger,
  title,
  description,
  onConfirm,
  onCancel,
  disabled,
}: ShowDialogProps) => {
  return (
    <Dialog open={open} setOpen={setOpen}>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>{title ?? "Are you sure?"}</Dialog.Title>
          <Dialog.Description>
            {description ?? "Are you sure about doing this?"}
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer
          style={{
            gap: 8,
            alignItems: "flex-end",
            marginTop: 0,
          }}
        >
          <Button onClick={onConfirm} title="Yes" color="red" size="small" />
          <Button
            onClick={() => {
              if (onCancel) onCancel();
              setOpen(false);
            }}
            color="red"
            size="small"
            title="Go back"
          />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

export default ShowDialog;