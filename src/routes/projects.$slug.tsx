import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailLayout, Bullets, type Section } from "@/components/DetailLayout";
import { PROJECTS } from "@/lib/projects";

type Detail = {
  summary: string;
  sections: Section[];
};

const DETAILS: Record<string, Detail> = {
  "fpga-board-communication": {
    summary:
      "Designed and verified FPGA-based communication for a robotic sensor platform. Multiple boards, multiple buses, all sharing a single fabric — the kind of problem where the bug is always in the waveform.",
    sections: [
      {
        title: "Overview",
        body: (
          <p>
            Built SystemVerilog modules to bridge a host FPGA with peripheral sensor boards over
            SPI, UART/RS485, and high-speed SERDES links. The goal: reliable, deterministic data
            paths under industrial timing budgets.
          </p>
        ),
      },
      {
        title: "System Context",
        body: (
          <p>
            Sensor boards (laser distance, IMU, encoders) feed measurements to a central FPGA
            controller. Different sensors needed different transports, all aggregated into one
            timing-clean stream for the downstream control loop.
          </p>
        ),
      },
      {
        title: "My Role",
        body: (
          <Bullets
            items={[
              "Authored SPI master at stable 20 MHz with configurable mode and CS staging.",
              "Built UART/RS485 half-duplex controller with timed direction flipping for the laser sensors.",
              "Implemented SERDES front-end with 8b/10b decode, comma alignment, and FIFO buffering.",
              "Owned bring-up, waveform debugging, and integration with the embedded host.",
            ]}
          />
        ),
      },
      {
        title: "Technical Highlights",
        body: (
          <Bullets
            items={[
              "20 MHz SPI with parameterized word width and back-to-back transfers.",
              "RS485 half-duplex polling protocol with frame parsing and CRC validation.",
              "SERDES link with comma detection, word alignment, and elastic FIFO crossing clock domains.",
              "8b/10b encode/decode with running disparity tracking.",
            ]}
          />
        ),
      },
      {
        title: "Debugging / Verification",
        body: (
          <Bullets
            items={[
              "Logic-analyzer capture for SPI/RS485 timing and frame integrity.",
              "On-chip signal taps to inspect SERDES alignment state and FIFO depth.",
              "Self-checking testbenches with looped frame sequences and injected bit errors.",
            ]}
          />
        ),
      },
      {
        title: "Result",
        body: (
          <p>
            Stable multi-sensor communication with zero observed frame drops in extended runs.
            The platform now uses the modules as its standard board-to-board comms layer.
          </p>
        ),
      },
      {
        title: "Tools / Skills",
        body: (
          <p className="font-mono text-sm text-muted-foreground">
            SystemVerilog · Quartus · ModelSim · Logic Analyzer · SPI · UART/RS485 · SERDES ·
            8b/10b · FIFO · CRC
          </p>
        ),
      },
    ],
  },

  "mini-rtos": {
    summary:
      "A small, honest RTOS for ARM Cortex-M. Written to learn what a kernel actually does — task control blocks, context switches, supervisor calls, and the allocator you never get to peek at.",
    sections: [
      {
        title: "Overview",
        body: (
          <p>
            A cooperative multitasking kernel for ARM Cortex-M built from scratch in C and ARM
            assembly. Provides task creation, context switching, system calls via SVC, and a
            custom dynamic memory allocator — no malloc, no libc heap.
          </p>
        ),
      },
      {
        title: "Kernel Architecture",
        body: (
          <p>
            Layered design: lowest level is the assembly context-switch primitives, then the C
            scheduler and TCB manager, then an SVC dispatch layer that exposes the syscall API to
            user tasks.
          </p>
        ),
      },
      {
        title: "Task Management",
        body: (
          <Bullets
            items={[
              "Task Control Block with stack pointer, state, priority, and link pointers.",
              "Task creation, termination, and yield.",
              "Per-task stack carved from a managed memory region.",
            ]}
          />
        ),
      },
      {
        title: "Context Switching",
        body: (
          <Bullets
            items={[
              "PendSV-driven context switch — defers actual switching out of higher-priority handlers.",
              "Saves and restores R4–R11 plus PSP; hardware handles the rest.",
              "Designed so any syscall can request a reschedule before returning.",
            ]}
          />
        ),
      },
      {
        title: "System Calls",
        body: (
          <p>
            User tasks invoke services via SVC instructions; the handler decodes the syscall
            number and dispatches to the kernel. This keeps user code free of direct kernel
            pointers and enforces a clean entry contract.
          </p>
        ),
      },
      {
        title: "Scheduler",
        body: (
          <Bullets
            items={[
              "Round-robin policy for equal-priority tasks.",
              "Priority-based selection with ready/blocked queues.",
              "O(1) ready-queue insertion and removal.",
            ]}
          />
        ),
      },
      {
        title: "Memory Allocator",
        body: (
          <p>
            Custom dynamic allocator over a fixed kernel heap — free-list based, with coalescing
            on free. No reliance on malloc/free from libc. Used for TCBs, task stacks, and
            kernel-internal buffers.
          </p>
        ),
      },
      {
        title: "Debugging Notes",
        body: (
          <p>
            Most issues lived in the context switch — stack alignment, EXC_RETURN values, and
            making sure FPU state was not silently corrupted. GDB with a serial monitor was the
            workhorse.
          </p>
        ),
      },
    ],
  },

  "nios-hw-sw-codesign": {
    summary:
      "FPGA-hosted embedded systems built around a Nios II soft-core. Custom peripherals on one side, embedded C on the other, and a memory map that has to make sense to both.",
    sections: [
      {
        title: "Overview",
        body: (
          <p>
            Designed FPGA platforms with a Nios II soft-core CPU, custom Verilog peripherals,
            and embedded C software — exercising the full hardware/software co-design loop in
            Quartus and Qsys.
          </p>
        ),
      },
      {
        title: "Hardware Platform",
        body: (
          <Bullets
            items={[
              "Nios II soft-core instantiated and configured via Qsys.",
              "Custom Verilog peripherals (timers, GPIO, simple display controllers) exposed on the Avalon bus.",
              "On-chip memory and external SRAM mapped into the CPU address space.",
            ]}
          />
        ),
      },
      {
        title: "Software Design",
        body: (
          <p>
            Embedded C running bare-metal on the Nios II. Drivers written directly against the
            memory-mapped peripheral registers — no HAL abstractions hiding what was happening.
          </p>
        ),
      },
      {
        title: "Hardware/Software Interface",
        body: (
          <Bullets
            items={[
              "MMIO-based control and status registers for every custom peripheral.",
              "Documented address map shared between Verilog and C.",
              "Low-level pointer casts for typed access to peripheral regions.",
            ]}
          />
        ),
      },
      {
        title: "Interrupts and Polling",
        body: (
          <p>
            Two control strategies depending on the peripheral: tight polling loops for
            deterministic short tasks, and interrupt-driven handlers for event-driven I/O. ISRs
            kept short and lock-free.
          </p>
        ),
      },
      {
        title: "Testing",
        body: (
          <p>
            HDL simulation for the peripherals in isolation, then integration testing on the FPGA
            with embedded C exercising every register and IRQ path.
          </p>
        ),
      },
      {
        title: "Result",
        body: (
          <p>
            A reusable HW/SW template for future Nios II projects — clean separation between
            hardware modules, the memory map, and the C driver layer.
          </p>
        ),
      },
    ],
  },
};

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    const detail = DETAILS[params.slug];
    if (!project || !detail) throw notFound();
    return { project, detail };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { project } = loaderData;
    const title = `${project.title} — Lucy Sun`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="label">Not found</p>
      <h1 className="font-display mt-4 text-4xl font-semibold">Project not found</h1>
    </div>
  ),
});

function ProjectDetail() {
  const { project, detail } = Route.useLoaderData();
  return (
    <DetailLayout
      number={project.number}
      type={project.type}
      title={project.title}
      summary={detail.summary}
      tags={project.tags}
      sections={detail.sections}
      image={project.image}
    />
  );
}
