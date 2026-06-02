import stm32Image from "@/assets/stm32-irrigation-real.jpg";
import niosImage from "@/assets/nios-board-enhanced.jpg";
import fpgaBoardComm from "@/assets/fpga-board-comm.jpg";
import miniRtos from "@/assets/mini-rtos.jpg";
import digitalFpga from "@/assets/digital-fpga.jpg";
import linuxConcurrency from "@/assets/linux-concurrency.jpg";

export type Project = {
  slug: string;
  number: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  hasDetail: boolean;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "fpga-board-communication",
    number: "01",
    title: "FPGA Board Communication Modules",
    type: "Industry · Coop",
    description:
      "Implemented and verified FPGA-based board-level communication for robotic sensor systems: stable 20 MHz SPI, UART/RS485 laser sensor polling, and SERDES link debugging.",
    tags: ["SystemVerilog", "SPI", "UART/RS485", "SERDES", "8b/10b", "FIFO", "CRC"],
    hasDetail: true,
    image: fpgaBoardComm,
  },
  {
    slug: "mini-rtos",
    number: "02",
    title: "Mini RTOS on ARM Cortex-M",
    type: "Embedded Firmware",
    description:
      "Cooperative multitasking kernel with task creation, context switching, system calls, scheduling policies, and a custom dynamic memory allocator — no malloc.",
    tags: ["C", "ARM Cortex-M", "ARM Asm", "SVC", "PendSV", "Scheduler", "Allocator"],
    hasDetail: true,
    image: miniRtos,
  },
  {
    slug: "nios-hw-sw-codesign",
    number: "03",
    title: "Nios II Hardware/Software Co-design",
    type: "FPGA + Embedded C",
    description:
      "FPGA-based embedded systems using a Nios II soft-core processor, custom peripherals, memory-mapped I/O, polling, and interrupt-driven control.",
    tags: ["C", "Verilog", "Quartus", "Nios II", "Qsys", "MMIO", "Interrupts"],
    hasDetail: true,
    image: niosAsset.url,
  },
  {
    slug: "digital-hw-fpga",
    number: "04",
    title: "Digital Hardware Systems on FPGA",
    type: "FPGA Design",
    description:
      "FPGA digital systems with datapaths, control FSMs, pipelining, FIFO-based memory modules, and timing analysis under synthesis constraints.",
    tags: ["SystemVerilog", "Vivado", "FSM", "Datapath", "Pipelining", "FIFO", "Timing"],
    hasDetail: false,
    image: digitalFpga,
  },
  {
    slug: "stm32-irrigation",
    number: "05",
    title: "STM32 Irrigation Controller Prototype",
    type: "Embedded Prototype",
    description:
      "Scaled-time irrigation controller using STM32 peripherals, sensor input, pump control, zone actuation, and PCB assembly.",
    tags: ["STM32", "CubeIDE", "GPIO", "PWM", "UART", "ADC", "Timers", "PCB"],
    hasDetail: false,
    image: stm32Asset.url,
  },
  {
    slug: "linux-concurrency",
    number: "06",
    title: "Linux Systems Programming & Concurrency",
    type: "Systems Programming",
    description:
      "Multi-threaded and multi-process C programs using shared memory, semaphores, mutexes, condition variables, and producer-consumer synchronization.",
    tags: ["C", "Linux", "pthreads", "Shared Memory", "Semaphores", "Mutex", "Cond Var"],
    hasDetail: false,
    image: linuxConcurrency,
  },
];
