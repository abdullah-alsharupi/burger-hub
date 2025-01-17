import React, { createContext, useContext, useState } from "react";
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  ViewProps,
} from "react-native";

type DialogContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DialogContext = createContext<DialogContextType | null>(null);

function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error(
      "Dialog compound components must be rendered within the Dialog component"
    );
  }
  return context;
}

type DialogProps = ViewProps & DialogContextType;

export const Dialog = ({ children, open, setOpen }: DialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const isControlled = open !== undefined && setOpen !== undefined;

  const dialogContext: DialogContextType = {
    setOpen: isControlled ? setOpen : setDialogOpen,
    open: isControlled ? open : dialogOpen,
  };

  return (
    <DialogContext.Provider value={dialogContext}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogContent = ({ style, children, ...props }: ViewProps) => {
  const { open, setOpen } = useDialog();

  return (
    <Modal transparent visible={open} animationType="fade">
      <TouchableWithoutFeedback onPress={() => setOpen(false)}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={[styles.content, style]} {...props}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

Dialog.Content = DialogContent;

const DialogHeader = ({ children, ...props }: ViewProps) => (
  <View style={styles.header} {...props}>
    {children}
  </View>
);

Dialog.Header = DialogHeader;

const DialogTitle = ({ children, ...props }: ViewProps) => (
  <Text style={styles.title} {...props}>
    {children}
  </Text>
);

Dialog.Title = DialogTitle;

const DialogDescription = ({ children, ...props }: ViewProps) => (
  <Text style={styles.description} {...props}>
    {children}
  </Text>
);

Dialog.Description = DialogDescription;

const DialogFooter = ({ children, style, ...props }: ViewProps) => (
  <View style={[styles.footer, style]} {...props}>
    {children}
  </View>
);

Dialog.Footer = DialogFooter;

const DialogTrigger: React.FC<ViewProps> = ({ children, ...props }) => {
  const { open, setOpen } = useDialog();

  const handlePress = () => {
    setOpen(!open); 
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
         //@ts-ignore
        onPress: () => {
          handlePress(); // Call the toggle function
          if (child.props.onPress) child.props.onPress();
        },
      });
    }
    return child;
  });

  return <View {...props}>{childrenWithProps}</View>;
};

Dialog.Trigger = DialogTrigger;

const DialogClose: React.FC<ViewProps> = ({ children, ...props }) => {
  const { setOpen } = useDialog();

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
            //@ts-ignore
        onPress: () => {
          setOpen(false);
          if (child.props.onPress) child.props.onPress();
        },
      });
    }
    return child;
  });

  return <View {...props}>{childrenWithProps}</View>;
};

Dialog.Close = DialogClose;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    minHeight: 100,
    minWidth: 200,
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "black",
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginBottom: 16,
  },
  footer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});