import { useDisclosure } from '@mantine/hooks';
import { Dialog, Text, ScrollArea, Paper, Button, TextInput, Group, Stack } from '@mantine/core';
import { Messages } from 'tabler-icons-react';
import { MessageType } from 'myTypes';
import { useEffect, useRef, useState } from "react";


export default function ChatBot() {
    const [opened, { toggle, close }] = useDisclosure(true);

    const [messageHistory, setMessageHistory] = useState<MessageType[]>([]);
    const [currentInput, setCurrentInput] = useState("");
    const viewport = useRef<HTMLDivElement>(null);

    /*
    * useEffect(() => {
    *     const savedMessages = localStorage.getItem("messageHistory");
    *     if (savedMessages) {
    *         setMessageHistory(JSON.parse(savedMessages));
    *     }
    * }, []); */

    return (
        <>
            <Dialog opened={opened} onClose={close} size="xs" radius="lg" p="xs" style={{ width: "auto" }}>
                <Button variant="light" onClick={toggle}>
                    <Messages />
                </Button>
            </Dialog>
            <Dialog opened={!opened} onClose={toggle} size="xl" radius="lg" p="xs">
                <Stack>
                    <ScrollArea.Autosize mah={300} maw={400} mx="auto">
                        {messageHistory.map((message: MessageType) => {
                            return <Message {...message} />
                        })}
                        <Group>
                            <TextInput
                                value={currentInput}
                                onChange={(event) => setCurrentInput(event.currentTarget.value)}
                                placeholder="Type your message here..."
                            />
                            <Button variant="light" onClick={() => {
                                var newMessage: MessageType = {
                                    sender: "You",
                                    message: currentInput,
                                    timestamp: new Date().toLocaleString()
                                }
                                setMessageHistory([...messageHistory, newMessage]);
                                setCurrentInput("");
                                viewport.current.slTo({ top: viewport.current.scrollHeight, behavior: 'smooth' })
                            }}>
                                Send
                            </Button>
                        </Group>
                    </ScrollArea.Autosize>
                </Stack>
            </Dialog>
        </>
    );
}

function Message({ sender, message, timestamp }: MessageType) {
    return (
        <Text> {sender}: {message} at {timestamp} </Text>
    )
}
