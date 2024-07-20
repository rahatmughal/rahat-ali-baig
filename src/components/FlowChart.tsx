import React, { useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Position,
  Handle,
  getBezierPath,
  EdgeProps,
  NodeProps,
} from '@xyflow/react';
import { FiFile, FiCloud } from 'react-icons/fi';
import '@xyflow/react/dist/base.css';
import 'tailwindcss/tailwind.css'; // Ensure you have tailwindcss setup

const FunctionIcon = () => {
  return (
    <svg width="14" viewBox="0 0 75 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="71" height="94" rx="10" fill="#F9F9F9" />
      <path
        d="M22 50H52"
        stroke="rgb(17, 17, 17)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M17 77H23.9528C26.2429 76.9949 30.242 75.9738 32 74.5C33.758 73.0262 35.164 71.1925 35.5778 68.9307L39.4222 31.0693C39.836 28.8075 41.242 26.9738 43 25.5C44.758 24.0262 47.7571 23.0051 50.0472 23H57"
        stroke="rgb(17, 17, 17)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

type TurboNodeData = {
  title: string;
  icon?: React.ReactNode;
  subline?: string;
};

const initialNodes: Node<TurboNodeData>[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { icon: <FunctionIcon />, title: 'HTML & CSS', subline: 'Basic Web Development' },
    type: 'turbo',
  },
  {
    id: '2',
    position: { x: 500, y: 200 },
    data: { icon: <FunctionIcon />, title: 'JavaScript', subline: 'Interactivity' },
    type: 'turbo',
  },
  {
    id: '3',
    position: { x: 1000, y: 0 },
    data: { icon: <FunctionIcon />, title: 'React', subline: 'Front-end Library' },
    type: 'turbo',
  },
  {
    id: '4',
    position: { x: 1500, y: 200 },
    data: { icon: <FunctionIcon />, title: 'Next.js', subline: 'React Framework' },
    type: 'turbo',
  },
  {
    id: '5',
    position: { x: 2000, y: 0 },
    data: { icon: <FunctionIcon />, title: 'Full-Stack Development', subline: 'Integration' },
    type: 'turbo',
  },
  {
    id: '6',
    position: { x: 2500, y: 200 },
    data: { icon: <FiFile />, title: 'Professional Projects' },
    type: 'turbo',
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'straight',
    animated: true,
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'straight',
    animated: true,
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'straight',
    animated: true,
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'straight',
    animated: true,
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'straight',
    animated: true,
  },
];

const TurboNode = ({ data }: NodeProps<Node<TurboNodeData>>) => {
  return (
    <>
      <div className="cloud gradient">
        <div>
          <FiCloud />
        </div>
      </div>
      <div className="wrapper gradient">
        <div className="inner">
          <div className="body">
            {data.icon && <div className="icon">{data.icon}</div>}
            <div>
              <div className="title">{data.title}</div>
              {data.subline && <div className="subline">{data.subline}</div>}
            </div>
          </div>
          <Handle type="target" position={Position.Left} />
          <Handle type="source" position={Position.Right} />
        </div>
      </div>
    </>
  );
};

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) => {
  const xEqual = sourceX === targetX;
  const yEqual = sourceY === targetY;

  const [edgePath] = getBezierPath({
    sourceX: xEqual ? sourceX + 0.0001 : sourceX,
    sourceY: yEqual ? sourceY + 0.0001 : sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <path
      id={id}
      style={style}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
      stroke="url(#edge-gradient)"
    />
  );
};

const nodeTypes = {
  turbo: TurboNode,
};

const edgeTypes = {
  straight: CustomEdge,
};

const defaultEdgeOptions = {
  type: 'straight',
  markerEnd: 'edge-circle',
};

const FlowChart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((els) => addEdge(params, els)),
    [],
  );

  return (
    <div className="h-screen cursor-auto" style={{ width: '300vw' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={true}
      >
        <Controls showInteractive={false} />
        <svg>
          <defs>
            <linearGradient id="edge-gradient">
              <stop offset="0%" stopColor="#ae53ba" />
              <stop offset="100%" stopColor="#2a8af6" />
            </linearGradient>

            <marker
              id="edge-circle"
              viewBox="-5 -5 10 10"
              refX="0"
              refY="0"
              markerUnits="strokeWidth"
              markerWidth="10"
              markerHeight="10"
              orient="auto"
            >
              <circle stroke="#2a8af6" strokeOpacity="0.75" r="2" cx="0" cy="0" />
            </marker>
          </defs>
        </svg>
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
