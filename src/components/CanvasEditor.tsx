import { Button, Text, Popover, Slider, Stack, Divider, ActionIcon } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Pencil } from "tabler-icons-react";

export default function CanvasEditor() {
    const [shape, setShape] = useLocalStorage<number>({ key: "canvas-shape", defaultValue: 1 });
    const [size, setSize] = useLocalStorage<number>({ key: "canvas-size", defaultValue: 30 });
    const [speed, setSpeed] = useLocalStorage<number>({ key: "canvas-speed", defaultValue: 1 });
    const [rotationSpeed, setRotationSpeed] = useLocalStorage<number>({ key: "canvas-rotation-speed", defaultValue: 0.01 });
    const [objectNumber, setObjectNumber] = useLocalStorage<number>({ key: "canvas-object-number", defaultValue: 150 });

    return (

        <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
                <ActionIcon
                    size="lg"
                    variant="outline"
                    color="green"
                    title="Edit Canvas Settings"
                >
                    <Pencil size={22} />
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown style={{ padding: "none" }}>
                <Stack>
                    <Text>Edit Canvas Settings:</Text>
                    <Divider />
                    <Stack spacing="nil" style={{ paddingBottom: "20px" }}>
                        <Text>Shape Type:</Text>
                        <Slider
                            color="green"
                            value={shape}
                            onChange={setShape}
                            defaultValue={1}
                            min={1}
                            max={5}
                            step={1}
                            marks={[
                                { value: 1, label: '1' },
                                { value: 2, label: '2' },
                                { value: 3, label: '3' },
                                { value: 4, label: '4' },
                                { value: 5, label: '5' },
                            ]}>
                        </Slider>
                    </Stack>
                    <Stack spacing="nil" style={{ paddingBottom: "20px" }}>
                        <Text>Average Size:</Text>
                        <Slider
                            color="red"
                            value={size}
                            onChange={setSize}
                            defaultValue={30}
                            min={1}
                            max={60}
                            step={1}
                            marks={[
                                { value: 1, label: '1' },
                                { value: 30, label: '30' },
                                { value: 60, label: '60' },
                            ]}>
                        </Slider>
                    </Stack>
                    <Stack spacing="nil" style={{ paddingBottom: "20px" }}>
                        <Text>Max Speed:</Text>
                        <Slider
                            color="blue"
                            value={speed}
                            onChange={setSpeed}
                            defaultValue={1}
                            min={0}
                            max={4}
                            step={0.2}
                            marks={[
                                { value: 0, label: '0' },
                                { value: 2, label: '2' },
                                { value: 4, label: '4' },
                            ]}>
                        </Slider>
                    </Stack>
                    <Stack spacing="nil" style={{ paddingBottom: "20px" }}>
                        <Text>Rotation speed:</Text>
                        <Slider
                            color="red"
                            value={rotationSpeed}
                            onChange={setRotationSpeed}
                            defaultValue={0.01}
                            min={0}
                            max={0.02}
                            step={0.001}
                            marks={[
                                { value: 0, label: '0' },
                                { value: 0.01, label: '0.01' },
                                { value: 0.02, label: '0.02' },
                            ]}>
                        </Slider>
                    </Stack>
                    <Stack spacing="nil" style={{ paddingBottom: "20px" }}>
                        <Text>Number of objects:</Text>
                        <Slider
                            color="red"
                            value={objectNumber}
                            onChange={setObjectNumber}
                            defaultValue={200}
                            min={0}
                            max={400}
                            step={50}
                            marks={[
                                { value: 0, label: '0' },
                                { value: 200, label: '200' },
                                { value: 400, label: '400' },
                            ]}>
                        </Slider>
                    </Stack>
                </Stack>
            </Popover.Dropdown>
        </Popover>
    )
}
