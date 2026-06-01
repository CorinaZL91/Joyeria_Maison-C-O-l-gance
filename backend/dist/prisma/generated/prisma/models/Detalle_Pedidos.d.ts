import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Detalle_Pedidos
 *
 */
export type Detalle_PedidosModel = runtime.Types.Result.DefaultSelection<Prisma.$Detalle_PedidosPayload>;
export type AggregateDetalle_Pedidos = {
    _count: Detalle_PedidosCountAggregateOutputType | null;
    _avg: Detalle_PedidosAvgAggregateOutputType | null;
    _sum: Detalle_PedidosSumAggregateOutputType | null;
    _min: Detalle_PedidosMinAggregateOutputType | null;
    _max: Detalle_PedidosMaxAggregateOutputType | null;
};
export type Detalle_PedidosAvgAggregateOutputType = {
    id_detalle: number | null;
    id_pedido: number | null;
    id_producto: number | null;
    cantidad: number | null;
    precio_unitario: number | null;
};
export type Detalle_PedidosSumAggregateOutputType = {
    id_detalle: number | null;
    id_pedido: number | null;
    id_producto: number | null;
    cantidad: number | null;
    precio_unitario: number | null;
};
export type Detalle_PedidosMinAggregateOutputType = {
    id_detalle: number | null;
    id_pedido: number | null;
    id_producto: number | null;
    cantidad: number | null;
    precio_unitario: number | null;
};
export type Detalle_PedidosMaxAggregateOutputType = {
    id_detalle: number | null;
    id_pedido: number | null;
    id_producto: number | null;
    cantidad: number | null;
    precio_unitario: number | null;
};
export type Detalle_PedidosCountAggregateOutputType = {
    id_detalle: number;
    id_pedido: number;
    id_producto: number;
    cantidad: number;
    precio_unitario: number;
    _all: number;
};
export type Detalle_PedidosAvgAggregateInputType = {
    id_detalle?: true;
    id_pedido?: true;
    id_producto?: true;
    cantidad?: true;
    precio_unitario?: true;
};
export type Detalle_PedidosSumAggregateInputType = {
    id_detalle?: true;
    id_pedido?: true;
    id_producto?: true;
    cantidad?: true;
    precio_unitario?: true;
};
export type Detalle_PedidosMinAggregateInputType = {
    id_detalle?: true;
    id_pedido?: true;
    id_producto?: true;
    cantidad?: true;
    precio_unitario?: true;
};
export type Detalle_PedidosMaxAggregateInputType = {
    id_detalle?: true;
    id_pedido?: true;
    id_producto?: true;
    cantidad?: true;
    precio_unitario?: true;
};
export type Detalle_PedidosCountAggregateInputType = {
    id_detalle?: true;
    id_pedido?: true;
    id_producto?: true;
    cantidad?: true;
    precio_unitario?: true;
    _all?: true;
};
export type Detalle_PedidosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Detalle_Pedidos to aggregate.
     */
    where?: Prisma.Detalle_PedidosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Detalle_Pedidos to fetch.
     */
    orderBy?: Prisma.Detalle_PedidosOrderByWithRelationInput | Prisma.Detalle_PedidosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Detalle_PedidosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Detalle_Pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Detalle_Pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Detalle_Pedidos
    **/
    _count?: true | Detalle_PedidosCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Detalle_PedidosAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Detalle_PedidosSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Detalle_PedidosMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Detalle_PedidosMaxAggregateInputType;
};
export type GetDetalle_PedidosAggregateType<T extends Detalle_PedidosAggregateArgs> = {
    [P in keyof T & keyof AggregateDetalle_Pedidos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDetalle_Pedidos[P]> : Prisma.GetScalarType<T[P], AggregateDetalle_Pedidos[P]>;
};
export type Detalle_PedidosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Detalle_PedidosWhereInput;
    orderBy?: Prisma.Detalle_PedidosOrderByWithAggregationInput | Prisma.Detalle_PedidosOrderByWithAggregationInput[];
    by: Prisma.Detalle_PedidosScalarFieldEnum[] | Prisma.Detalle_PedidosScalarFieldEnum;
    having?: Prisma.Detalle_PedidosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Detalle_PedidosCountAggregateInputType | true;
    _avg?: Detalle_PedidosAvgAggregateInputType;
    _sum?: Detalle_PedidosSumAggregateInputType;
    _min?: Detalle_PedidosMinAggregateInputType;
    _max?: Detalle_PedidosMaxAggregateInputType;
};
export type Detalle_PedidosGroupByOutputType = {
    id_detalle: number;
    id_pedido: number;
    id_producto: number;
    cantidad: number;
    precio_unitario: number;
    _count: Detalle_PedidosCountAggregateOutputType | null;
    _avg: Detalle_PedidosAvgAggregateOutputType | null;
    _sum: Detalle_PedidosSumAggregateOutputType | null;
    _min: Detalle_PedidosMinAggregateOutputType | null;
    _max: Detalle_PedidosMaxAggregateOutputType | null;
};
type GetDetalle_PedidosGroupByPayload<T extends Detalle_PedidosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Detalle_PedidosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Detalle_PedidosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Detalle_PedidosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Detalle_PedidosGroupByOutputType[P]>;
}>>;
export type Detalle_PedidosWhereInput = {
    AND?: Prisma.Detalle_PedidosWhereInput | Prisma.Detalle_PedidosWhereInput[];
    OR?: Prisma.Detalle_PedidosWhereInput[];
    NOT?: Prisma.Detalle_PedidosWhereInput | Prisma.Detalle_PedidosWhereInput[];
    id_detalle?: Prisma.IntFilter<"Detalle_Pedidos"> | number;
    id_pedido?: Prisma.IntFilter<"Detalle_Pedidos"> | number;
    id_producto?: Prisma.IntFilter<"Detalle_Pedidos"> | number;
    cantidad?: Prisma.IntFilter<"Detalle_Pedidos"> | number;
    precio_unitario?: Prisma.FloatFilter<"Detalle_Pedidos"> | number;
    pedido?: Prisma.XOR<Prisma.PedidosScalarRelationFilter, Prisma.PedidosWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductosScalarRelationFilter, Prisma.ProductosWhereInput>;
};
export type Detalle_PedidosOrderByWithRelationInput = {
    id_detalle?: Prisma.SortOrder;
    id_pedido?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
    pedido?: Prisma.PedidosOrderByWithRelationInput;
    producto?: Prisma.ProductosOrderByWithRelationInput;
};
export type Detalle_PedidosWhereUniqueInput = Prisma.AtLeast<{
    id_detalle?: number;
    AND?: Prisma.Detalle_PedidosWhereInput | Prisma.Detalle_PedidosWhereInput[];
    OR?: Prisma.Detalle_PedidosWhereInput[];
    NOT?: Prisma.Detalle_PedidosWhereInput | Prisma.Detalle_PedidosWhereInput[];
    id_pedido?: Prisma.IntFilter<"Detalle_Pedidos"> | number;
    id_producto?: Prisma.IntFilter<"Detalle_Pedidos"> | number;
    cantidad?: Prisma.IntFilter<"Detalle_Pedidos"> | number;
    precio_unitario?: Prisma.FloatFilter<"Detalle_Pedidos"> | number;
    pedido?: Prisma.XOR<Prisma.PedidosScalarRelationFilter, Prisma.PedidosWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductosScalarRelationFilter, Prisma.ProductosWhereInput>;
}, "id_detalle">;
export type Detalle_PedidosOrderByWithAggregationInput = {
    id_detalle?: Prisma.SortOrder;
    id_pedido?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
    _count?: Prisma.Detalle_PedidosCountOrderByAggregateInput;
    _avg?: Prisma.Detalle_PedidosAvgOrderByAggregateInput;
    _max?: Prisma.Detalle_PedidosMaxOrderByAggregateInput;
    _min?: Prisma.Detalle_PedidosMinOrderByAggregateInput;
    _sum?: Prisma.Detalle_PedidosSumOrderByAggregateInput;
};
export type Detalle_PedidosScalarWhereWithAggregatesInput = {
    AND?: Prisma.Detalle_PedidosScalarWhereWithAggregatesInput | Prisma.Detalle_PedidosScalarWhereWithAggregatesInput[];
    OR?: Prisma.Detalle_PedidosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Detalle_PedidosScalarWhereWithAggregatesInput | Prisma.Detalle_PedidosScalarWhereWithAggregatesInput[];
    id_detalle?: Prisma.IntWithAggregatesFilter<"Detalle_Pedidos"> | number;
    id_pedido?: Prisma.IntWithAggregatesFilter<"Detalle_Pedidos"> | number;
    id_producto?: Prisma.IntWithAggregatesFilter<"Detalle_Pedidos"> | number;
    cantidad?: Prisma.IntWithAggregatesFilter<"Detalle_Pedidos"> | number;
    precio_unitario?: Prisma.FloatWithAggregatesFilter<"Detalle_Pedidos"> | number;
};
export type Detalle_PedidosCreateInput = {
    cantidad: number;
    precio_unitario: number;
    pedido: Prisma.PedidosCreateNestedOneWithoutDetalle_pedidosInput;
    producto: Prisma.ProductosCreateNestedOneWithoutDetalle_pedidosInput;
};
export type Detalle_PedidosUncheckedCreateInput = {
    id_detalle?: number;
    id_pedido: number;
    id_producto: number;
    cantidad: number;
    precio_unitario: number;
};
export type Detalle_PedidosUpdateInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precio_unitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    pedido?: Prisma.PedidosUpdateOneRequiredWithoutDetalle_pedidosNestedInput;
    producto?: Prisma.ProductosUpdateOneRequiredWithoutDetalle_pedidosNestedInput;
};
export type Detalle_PedidosUncheckedUpdateInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pedido?: Prisma.IntFieldUpdateOperationsInput | number;
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precio_unitario?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type Detalle_PedidosCreateManyInput = {
    id_detalle?: number;
    id_pedido: number;
    id_producto: number;
    cantidad: number;
    precio_unitario: number;
};
export type Detalle_PedidosUpdateManyMutationInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precio_unitario?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type Detalle_PedidosUncheckedUpdateManyInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pedido?: Prisma.IntFieldUpdateOperationsInput | number;
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precio_unitario?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type Detalle_PedidosListRelationFilter = {
    every?: Prisma.Detalle_PedidosWhereInput;
    some?: Prisma.Detalle_PedidosWhereInput;
    none?: Prisma.Detalle_PedidosWhereInput;
};
export type Detalle_PedidosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Detalle_PedidosCountOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    id_pedido?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
};
export type Detalle_PedidosAvgOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    id_pedido?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
};
export type Detalle_PedidosMaxOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    id_pedido?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
};
export type Detalle_PedidosMinOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    id_pedido?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
};
export type Detalle_PedidosSumOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    id_pedido?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
};
export type Detalle_PedidosCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.Detalle_PedidosCreateWithoutProductoInput, Prisma.Detalle_PedidosUncheckedCreateWithoutProductoInput> | Prisma.Detalle_PedidosCreateWithoutProductoInput[] | Prisma.Detalle_PedidosUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.Detalle_PedidosCreateOrConnectWithoutProductoInput | Prisma.Detalle_PedidosCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.Detalle_PedidosCreateManyProductoInputEnvelope;
    connect?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
};
export type Detalle_PedidosUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.Detalle_PedidosCreateWithoutProductoInput, Prisma.Detalle_PedidosUncheckedCreateWithoutProductoInput> | Prisma.Detalle_PedidosCreateWithoutProductoInput[] | Prisma.Detalle_PedidosUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.Detalle_PedidosCreateOrConnectWithoutProductoInput | Prisma.Detalle_PedidosCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.Detalle_PedidosCreateManyProductoInputEnvelope;
    connect?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
};
export type Detalle_PedidosUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.Detalle_PedidosCreateWithoutProductoInput, Prisma.Detalle_PedidosUncheckedCreateWithoutProductoInput> | Prisma.Detalle_PedidosCreateWithoutProductoInput[] | Prisma.Detalle_PedidosUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.Detalle_PedidosCreateOrConnectWithoutProductoInput | Prisma.Detalle_PedidosCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.Detalle_PedidosUpsertWithWhereUniqueWithoutProductoInput | Prisma.Detalle_PedidosUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.Detalle_PedidosCreateManyProductoInputEnvelope;
    set?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    disconnect?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    delete?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    connect?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    update?: Prisma.Detalle_PedidosUpdateWithWhereUniqueWithoutProductoInput | Prisma.Detalle_PedidosUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.Detalle_PedidosUpdateManyWithWhereWithoutProductoInput | Prisma.Detalle_PedidosUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.Detalle_PedidosScalarWhereInput | Prisma.Detalle_PedidosScalarWhereInput[];
};
export type Detalle_PedidosUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.Detalle_PedidosCreateWithoutProductoInput, Prisma.Detalle_PedidosUncheckedCreateWithoutProductoInput> | Prisma.Detalle_PedidosCreateWithoutProductoInput[] | Prisma.Detalle_PedidosUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.Detalle_PedidosCreateOrConnectWithoutProductoInput | Prisma.Detalle_PedidosCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.Detalle_PedidosUpsertWithWhereUniqueWithoutProductoInput | Prisma.Detalle_PedidosUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.Detalle_PedidosCreateManyProductoInputEnvelope;
    set?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    disconnect?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    delete?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    connect?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    update?: Prisma.Detalle_PedidosUpdateWithWhereUniqueWithoutProductoInput | Prisma.Detalle_PedidosUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.Detalle_PedidosUpdateManyWithWhereWithoutProductoInput | Prisma.Detalle_PedidosUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.Detalle_PedidosScalarWhereInput | Prisma.Detalle_PedidosScalarWhereInput[];
};
export type Detalle_PedidosCreateNestedManyWithoutPedidoInput = {
    create?: Prisma.XOR<Prisma.Detalle_PedidosCreateWithoutPedidoInput, Prisma.Detalle_PedidosUncheckedCreateWithoutPedidoInput> | Prisma.Detalle_PedidosCreateWithoutPedidoInput[] | Prisma.Detalle_PedidosUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.Detalle_PedidosCreateOrConnectWithoutPedidoInput | Prisma.Detalle_PedidosCreateOrConnectWithoutPedidoInput[];
    createMany?: Prisma.Detalle_PedidosCreateManyPedidoInputEnvelope;
    connect?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
};
export type Detalle_PedidosUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: Prisma.XOR<Prisma.Detalle_PedidosCreateWithoutPedidoInput, Prisma.Detalle_PedidosUncheckedCreateWithoutPedidoInput> | Prisma.Detalle_PedidosCreateWithoutPedidoInput[] | Prisma.Detalle_PedidosUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.Detalle_PedidosCreateOrConnectWithoutPedidoInput | Prisma.Detalle_PedidosCreateOrConnectWithoutPedidoInput[];
    createMany?: Prisma.Detalle_PedidosCreateManyPedidoInputEnvelope;
    connect?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
};
export type Detalle_PedidosUpdateManyWithoutPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.Detalle_PedidosCreateWithoutPedidoInput, Prisma.Detalle_PedidosUncheckedCreateWithoutPedidoInput> | Prisma.Detalle_PedidosCreateWithoutPedidoInput[] | Prisma.Detalle_PedidosUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.Detalle_PedidosCreateOrConnectWithoutPedidoInput | Prisma.Detalle_PedidosCreateOrConnectWithoutPedidoInput[];
    upsert?: Prisma.Detalle_PedidosUpsertWithWhereUniqueWithoutPedidoInput | Prisma.Detalle_PedidosUpsertWithWhereUniqueWithoutPedidoInput[];
    createMany?: Prisma.Detalle_PedidosCreateManyPedidoInputEnvelope;
    set?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    disconnect?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    delete?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    connect?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    update?: Prisma.Detalle_PedidosUpdateWithWhereUniqueWithoutPedidoInput | Prisma.Detalle_PedidosUpdateWithWhereUniqueWithoutPedidoInput[];
    updateMany?: Prisma.Detalle_PedidosUpdateManyWithWhereWithoutPedidoInput | Prisma.Detalle_PedidosUpdateManyWithWhereWithoutPedidoInput[];
    deleteMany?: Prisma.Detalle_PedidosScalarWhereInput | Prisma.Detalle_PedidosScalarWhereInput[];
};
export type Detalle_PedidosUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.Detalle_PedidosCreateWithoutPedidoInput, Prisma.Detalle_PedidosUncheckedCreateWithoutPedidoInput> | Prisma.Detalle_PedidosCreateWithoutPedidoInput[] | Prisma.Detalle_PedidosUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.Detalle_PedidosCreateOrConnectWithoutPedidoInput | Prisma.Detalle_PedidosCreateOrConnectWithoutPedidoInput[];
    upsert?: Prisma.Detalle_PedidosUpsertWithWhereUniqueWithoutPedidoInput | Prisma.Detalle_PedidosUpsertWithWhereUniqueWithoutPedidoInput[];
    createMany?: Prisma.Detalle_PedidosCreateManyPedidoInputEnvelope;
    set?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    disconnect?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    delete?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    connect?: Prisma.Detalle_PedidosWhereUniqueInput | Prisma.Detalle_PedidosWhereUniqueInput[];
    update?: Prisma.Detalle_PedidosUpdateWithWhereUniqueWithoutPedidoInput | Prisma.Detalle_PedidosUpdateWithWhereUniqueWithoutPedidoInput[];
    updateMany?: Prisma.Detalle_PedidosUpdateManyWithWhereWithoutPedidoInput | Prisma.Detalle_PedidosUpdateManyWithWhereWithoutPedidoInput[];
    deleteMany?: Prisma.Detalle_PedidosScalarWhereInput | Prisma.Detalle_PedidosScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type Detalle_PedidosCreateWithoutProductoInput = {
    cantidad: number;
    precio_unitario: number;
    pedido: Prisma.PedidosCreateNestedOneWithoutDetalle_pedidosInput;
};
export type Detalle_PedidosUncheckedCreateWithoutProductoInput = {
    id_detalle?: number;
    id_pedido: number;
    cantidad: number;
    precio_unitario: number;
};
export type Detalle_PedidosCreateOrConnectWithoutProductoInput = {
    where: Prisma.Detalle_PedidosWhereUniqueInput;
    create: Prisma.XOR<Prisma.Detalle_PedidosCreateWithoutProductoInput, Prisma.Detalle_PedidosUncheckedCreateWithoutProductoInput>;
};
export type Detalle_PedidosCreateManyProductoInputEnvelope = {
    data: Prisma.Detalle_PedidosCreateManyProductoInput | Prisma.Detalle_PedidosCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type Detalle_PedidosUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.Detalle_PedidosWhereUniqueInput;
    update: Prisma.XOR<Prisma.Detalle_PedidosUpdateWithoutProductoInput, Prisma.Detalle_PedidosUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.Detalle_PedidosCreateWithoutProductoInput, Prisma.Detalle_PedidosUncheckedCreateWithoutProductoInput>;
};
export type Detalle_PedidosUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.Detalle_PedidosWhereUniqueInput;
    data: Prisma.XOR<Prisma.Detalle_PedidosUpdateWithoutProductoInput, Prisma.Detalle_PedidosUncheckedUpdateWithoutProductoInput>;
};
export type Detalle_PedidosUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.Detalle_PedidosScalarWhereInput;
    data: Prisma.XOR<Prisma.Detalle_PedidosUpdateManyMutationInput, Prisma.Detalle_PedidosUncheckedUpdateManyWithoutProductoInput>;
};
export type Detalle_PedidosScalarWhereInput = {
    AND?: Prisma.Detalle_PedidosScalarWhereInput | Prisma.Detalle_PedidosScalarWhereInput[];
    OR?: Prisma.Detalle_PedidosScalarWhereInput[];
    NOT?: Prisma.Detalle_PedidosScalarWhereInput | Prisma.Detalle_PedidosScalarWhereInput[];
    id_detalle?: Prisma.IntFilter<"Detalle_Pedidos"> | number;
    id_pedido?: Prisma.IntFilter<"Detalle_Pedidos"> | number;
    id_producto?: Prisma.IntFilter<"Detalle_Pedidos"> | number;
    cantidad?: Prisma.IntFilter<"Detalle_Pedidos"> | number;
    precio_unitario?: Prisma.FloatFilter<"Detalle_Pedidos"> | number;
};
export type Detalle_PedidosCreateWithoutPedidoInput = {
    cantidad: number;
    precio_unitario: number;
    producto: Prisma.ProductosCreateNestedOneWithoutDetalle_pedidosInput;
};
export type Detalle_PedidosUncheckedCreateWithoutPedidoInput = {
    id_detalle?: number;
    id_producto: number;
    cantidad: number;
    precio_unitario: number;
};
export type Detalle_PedidosCreateOrConnectWithoutPedidoInput = {
    where: Prisma.Detalle_PedidosWhereUniqueInput;
    create: Prisma.XOR<Prisma.Detalle_PedidosCreateWithoutPedidoInput, Prisma.Detalle_PedidosUncheckedCreateWithoutPedidoInput>;
};
export type Detalle_PedidosCreateManyPedidoInputEnvelope = {
    data: Prisma.Detalle_PedidosCreateManyPedidoInput | Prisma.Detalle_PedidosCreateManyPedidoInput[];
    skipDuplicates?: boolean;
};
export type Detalle_PedidosUpsertWithWhereUniqueWithoutPedidoInput = {
    where: Prisma.Detalle_PedidosWhereUniqueInput;
    update: Prisma.XOR<Prisma.Detalle_PedidosUpdateWithoutPedidoInput, Prisma.Detalle_PedidosUncheckedUpdateWithoutPedidoInput>;
    create: Prisma.XOR<Prisma.Detalle_PedidosCreateWithoutPedidoInput, Prisma.Detalle_PedidosUncheckedCreateWithoutPedidoInput>;
};
export type Detalle_PedidosUpdateWithWhereUniqueWithoutPedidoInput = {
    where: Prisma.Detalle_PedidosWhereUniqueInput;
    data: Prisma.XOR<Prisma.Detalle_PedidosUpdateWithoutPedidoInput, Prisma.Detalle_PedidosUncheckedUpdateWithoutPedidoInput>;
};
export type Detalle_PedidosUpdateManyWithWhereWithoutPedidoInput = {
    where: Prisma.Detalle_PedidosScalarWhereInput;
    data: Prisma.XOR<Prisma.Detalle_PedidosUpdateManyMutationInput, Prisma.Detalle_PedidosUncheckedUpdateManyWithoutPedidoInput>;
};
export type Detalle_PedidosCreateManyProductoInput = {
    id_detalle?: number;
    id_pedido: number;
    cantidad: number;
    precio_unitario: number;
};
export type Detalle_PedidosUpdateWithoutProductoInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precio_unitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    pedido?: Prisma.PedidosUpdateOneRequiredWithoutDetalle_pedidosNestedInput;
};
export type Detalle_PedidosUncheckedUpdateWithoutProductoInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pedido?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precio_unitario?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type Detalle_PedidosUncheckedUpdateManyWithoutProductoInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pedido?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precio_unitario?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type Detalle_PedidosCreateManyPedidoInput = {
    id_detalle?: number;
    id_producto: number;
    cantidad: number;
    precio_unitario: number;
};
export type Detalle_PedidosUpdateWithoutPedidoInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precio_unitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    producto?: Prisma.ProductosUpdateOneRequiredWithoutDetalle_pedidosNestedInput;
};
export type Detalle_PedidosUncheckedUpdateWithoutPedidoInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precio_unitario?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type Detalle_PedidosUncheckedUpdateManyWithoutPedidoInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precio_unitario?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type Detalle_PedidosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_detalle?: boolean;
    id_pedido?: boolean;
    id_producto?: boolean;
    cantidad?: boolean;
    precio_unitario?: boolean;
    pedido?: boolean | Prisma.PedidosDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalle_Pedidos"]>;
export type Detalle_PedidosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_detalle?: boolean;
    id_pedido?: boolean;
    id_producto?: boolean;
    cantidad?: boolean;
    precio_unitario?: boolean;
    pedido?: boolean | Prisma.PedidosDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalle_Pedidos"]>;
export type Detalle_PedidosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_detalle?: boolean;
    id_pedido?: boolean;
    id_producto?: boolean;
    cantidad?: boolean;
    precio_unitario?: boolean;
    pedido?: boolean | Prisma.PedidosDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalle_Pedidos"]>;
export type Detalle_PedidosSelectScalar = {
    id_detalle?: boolean;
    id_pedido?: boolean;
    id_producto?: boolean;
    cantidad?: boolean;
    precio_unitario?: boolean;
};
export type Detalle_PedidosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_detalle" | "id_pedido" | "id_producto" | "cantidad" | "precio_unitario", ExtArgs["result"]["detalle_Pedidos"]>;
export type Detalle_PedidosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.PedidosDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
};
export type Detalle_PedidosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.PedidosDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
};
export type Detalle_PedidosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.PedidosDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
};
export type $Detalle_PedidosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Detalle_Pedidos";
    objects: {
        pedido: Prisma.$PedidosPayload<ExtArgs>;
        producto: Prisma.$ProductosPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_detalle: number;
        id_pedido: number;
        id_producto: number;
        cantidad: number;
        precio_unitario: number;
    }, ExtArgs["result"]["detalle_Pedidos"]>;
    composites: {};
};
export type Detalle_PedidosGetPayload<S extends boolean | null | undefined | Detalle_PedidosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload, S>;
export type Detalle_PedidosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Detalle_PedidosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Detalle_PedidosCountAggregateInputType | true;
};
export interface Detalle_PedidosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Detalle_Pedidos'];
        meta: {
            name: 'Detalle_Pedidos';
        };
    };
    /**
     * Find zero or one Detalle_Pedidos that matches the filter.
     * @param {Detalle_PedidosFindUniqueArgs} args - Arguments to find a Detalle_Pedidos
     * @example
     * // Get one Detalle_Pedidos
     * const detalle_Pedidos = await prisma.detalle_Pedidos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Detalle_PedidosFindUniqueArgs>(args: Prisma.SelectSubset<T, Detalle_PedidosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Detalle_PedidosClient<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Detalle_Pedidos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Detalle_PedidosFindUniqueOrThrowArgs} args - Arguments to find a Detalle_Pedidos
     * @example
     * // Get one Detalle_Pedidos
     * const detalle_Pedidos = await prisma.detalle_Pedidos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Detalle_PedidosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Detalle_PedidosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Detalle_PedidosClient<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Detalle_Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_PedidosFindFirstArgs} args - Arguments to find a Detalle_Pedidos
     * @example
     * // Get one Detalle_Pedidos
     * const detalle_Pedidos = await prisma.detalle_Pedidos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Detalle_PedidosFindFirstArgs>(args?: Prisma.SelectSubset<T, Detalle_PedidosFindFirstArgs<ExtArgs>>): Prisma.Prisma__Detalle_PedidosClient<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Detalle_Pedidos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_PedidosFindFirstOrThrowArgs} args - Arguments to find a Detalle_Pedidos
     * @example
     * // Get one Detalle_Pedidos
     * const detalle_Pedidos = await prisma.detalle_Pedidos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Detalle_PedidosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Detalle_PedidosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Detalle_PedidosClient<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Detalle_Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_PedidosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalle_Pedidos
     * const detalle_Pedidos = await prisma.detalle_Pedidos.findMany()
     *
     * // Get first 10 Detalle_Pedidos
     * const detalle_Pedidos = await prisma.detalle_Pedidos.findMany({ take: 10 })
     *
     * // Only select the `id_detalle`
     * const detalle_PedidosWithId_detalleOnly = await prisma.detalle_Pedidos.findMany({ select: { id_detalle: true } })
     *
     */
    findMany<T extends Detalle_PedidosFindManyArgs>(args?: Prisma.SelectSubset<T, Detalle_PedidosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Detalle_Pedidos.
     * @param {Detalle_PedidosCreateArgs} args - Arguments to create a Detalle_Pedidos.
     * @example
     * // Create one Detalle_Pedidos
     * const Detalle_Pedidos = await prisma.detalle_Pedidos.create({
     *   data: {
     *     // ... data to create a Detalle_Pedidos
     *   }
     * })
     *
     */
    create<T extends Detalle_PedidosCreateArgs>(args: Prisma.SelectSubset<T, Detalle_PedidosCreateArgs<ExtArgs>>): Prisma.Prisma__Detalle_PedidosClient<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Detalle_Pedidos.
     * @param {Detalle_PedidosCreateManyArgs} args - Arguments to create many Detalle_Pedidos.
     * @example
     * // Create many Detalle_Pedidos
     * const detalle_Pedidos = await prisma.detalle_Pedidos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Detalle_PedidosCreateManyArgs>(args?: Prisma.SelectSubset<T, Detalle_PedidosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Detalle_Pedidos and returns the data saved in the database.
     * @param {Detalle_PedidosCreateManyAndReturnArgs} args - Arguments to create many Detalle_Pedidos.
     * @example
     * // Create many Detalle_Pedidos
     * const detalle_Pedidos = await prisma.detalle_Pedidos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Detalle_Pedidos and only return the `id_detalle`
     * const detalle_PedidosWithId_detalleOnly = await prisma.detalle_Pedidos.createManyAndReturn({
     *   select: { id_detalle: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Detalle_PedidosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Detalle_PedidosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Detalle_Pedidos.
     * @param {Detalle_PedidosDeleteArgs} args - Arguments to delete one Detalle_Pedidos.
     * @example
     * // Delete one Detalle_Pedidos
     * const Detalle_Pedidos = await prisma.detalle_Pedidos.delete({
     *   where: {
     *     // ... filter to delete one Detalle_Pedidos
     *   }
     * })
     *
     */
    delete<T extends Detalle_PedidosDeleteArgs>(args: Prisma.SelectSubset<T, Detalle_PedidosDeleteArgs<ExtArgs>>): Prisma.Prisma__Detalle_PedidosClient<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Detalle_Pedidos.
     * @param {Detalle_PedidosUpdateArgs} args - Arguments to update one Detalle_Pedidos.
     * @example
     * // Update one Detalle_Pedidos
     * const detalle_Pedidos = await prisma.detalle_Pedidos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Detalle_PedidosUpdateArgs>(args: Prisma.SelectSubset<T, Detalle_PedidosUpdateArgs<ExtArgs>>): Prisma.Prisma__Detalle_PedidosClient<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Detalle_Pedidos.
     * @param {Detalle_PedidosDeleteManyArgs} args - Arguments to filter Detalle_Pedidos to delete.
     * @example
     * // Delete a few Detalle_Pedidos
     * const { count } = await prisma.detalle_Pedidos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Detalle_PedidosDeleteManyArgs>(args?: Prisma.SelectSubset<T, Detalle_PedidosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Detalle_Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_PedidosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalle_Pedidos
     * const detalle_Pedidos = await prisma.detalle_Pedidos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Detalle_PedidosUpdateManyArgs>(args: Prisma.SelectSubset<T, Detalle_PedidosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Detalle_Pedidos and returns the data updated in the database.
     * @param {Detalle_PedidosUpdateManyAndReturnArgs} args - Arguments to update many Detalle_Pedidos.
     * @example
     * // Update many Detalle_Pedidos
     * const detalle_Pedidos = await prisma.detalle_Pedidos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Detalle_Pedidos and only return the `id_detalle`
     * const detalle_PedidosWithId_detalleOnly = await prisma.detalle_Pedidos.updateManyAndReturn({
     *   select: { id_detalle: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends Detalle_PedidosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Detalle_PedidosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Detalle_Pedidos.
     * @param {Detalle_PedidosUpsertArgs} args - Arguments to update or create a Detalle_Pedidos.
     * @example
     * // Update or create a Detalle_Pedidos
     * const detalle_Pedidos = await prisma.detalle_Pedidos.upsert({
     *   create: {
     *     // ... data to create a Detalle_Pedidos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle_Pedidos we want to update
     *   }
     * })
     */
    upsert<T extends Detalle_PedidosUpsertArgs>(args: Prisma.SelectSubset<T, Detalle_PedidosUpsertArgs<ExtArgs>>): Prisma.Prisma__Detalle_PedidosClient<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Detalle_Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_PedidosCountArgs} args - Arguments to filter Detalle_Pedidos to count.
     * @example
     * // Count the number of Detalle_Pedidos
     * const count = await prisma.detalle_Pedidos.count({
     *   where: {
     *     // ... the filter for the Detalle_Pedidos we want to count
     *   }
     * })
    **/
    count<T extends Detalle_PedidosCountArgs>(args?: Prisma.Subset<T, Detalle_PedidosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Detalle_PedidosCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Detalle_Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_PedidosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detalle_PedidosAggregateArgs>(args: Prisma.Subset<T, Detalle_PedidosAggregateArgs>): Prisma.PrismaPromise<GetDetalle_PedidosAggregateType<T>>;
    /**
     * Group by Detalle_Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_PedidosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends Detalle_PedidosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Detalle_PedidosGroupByArgs['orderBy'];
    } : {
        orderBy?: Detalle_PedidosGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Detalle_PedidosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_PedidosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Detalle_Pedidos model
     */
    readonly fields: Detalle_PedidosFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Detalle_Pedidos.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Detalle_PedidosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pedido<T extends Prisma.PedidosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PedidosDefaultArgs<ExtArgs>>): Prisma.Prisma__PedidosClient<runtime.Types.Result.GetResult<Prisma.$PedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    producto<T extends Prisma.ProductosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductosDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Detalle_Pedidos model
 */
export interface Detalle_PedidosFieldRefs {
    readonly id_detalle: Prisma.FieldRef<"Detalle_Pedidos", 'Int'>;
    readonly id_pedido: Prisma.FieldRef<"Detalle_Pedidos", 'Int'>;
    readonly id_producto: Prisma.FieldRef<"Detalle_Pedidos", 'Int'>;
    readonly cantidad: Prisma.FieldRef<"Detalle_Pedidos", 'Int'>;
    readonly precio_unitario: Prisma.FieldRef<"Detalle_Pedidos", 'Float'>;
}
/**
 * Detalle_Pedidos findUnique
 */
export type Detalle_PedidosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_Pedidos
     */
    select?: Prisma.Detalle_PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Detalle_Pedidos
     */
    omit?: Prisma.Detalle_PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Detalle_PedidosInclude<ExtArgs> | null;
    /**
     * Filter, which Detalle_Pedidos to fetch.
     */
    where: Prisma.Detalle_PedidosWhereUniqueInput;
};
/**
 * Detalle_Pedidos findUniqueOrThrow
 */
export type Detalle_PedidosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_Pedidos
     */
    select?: Prisma.Detalle_PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Detalle_Pedidos
     */
    omit?: Prisma.Detalle_PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Detalle_PedidosInclude<ExtArgs> | null;
    /**
     * Filter, which Detalle_Pedidos to fetch.
     */
    where: Prisma.Detalle_PedidosWhereUniqueInput;
};
/**
 * Detalle_Pedidos findFirst
 */
export type Detalle_PedidosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_Pedidos
     */
    select?: Prisma.Detalle_PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Detalle_Pedidos
     */
    omit?: Prisma.Detalle_PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Detalle_PedidosInclude<ExtArgs> | null;
    /**
     * Filter, which Detalle_Pedidos to fetch.
     */
    where?: Prisma.Detalle_PedidosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Detalle_Pedidos to fetch.
     */
    orderBy?: Prisma.Detalle_PedidosOrderByWithRelationInput | Prisma.Detalle_PedidosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Detalle_Pedidos.
     */
    cursor?: Prisma.Detalle_PedidosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Detalle_Pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Detalle_Pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Detalle_Pedidos.
     */
    distinct?: Prisma.Detalle_PedidosScalarFieldEnum | Prisma.Detalle_PedidosScalarFieldEnum[];
};
/**
 * Detalle_Pedidos findFirstOrThrow
 */
export type Detalle_PedidosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_Pedidos
     */
    select?: Prisma.Detalle_PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Detalle_Pedidos
     */
    omit?: Prisma.Detalle_PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Detalle_PedidosInclude<ExtArgs> | null;
    /**
     * Filter, which Detalle_Pedidos to fetch.
     */
    where?: Prisma.Detalle_PedidosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Detalle_Pedidos to fetch.
     */
    orderBy?: Prisma.Detalle_PedidosOrderByWithRelationInput | Prisma.Detalle_PedidosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Detalle_Pedidos.
     */
    cursor?: Prisma.Detalle_PedidosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Detalle_Pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Detalle_Pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Detalle_Pedidos.
     */
    distinct?: Prisma.Detalle_PedidosScalarFieldEnum | Prisma.Detalle_PedidosScalarFieldEnum[];
};
/**
 * Detalle_Pedidos findMany
 */
export type Detalle_PedidosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_Pedidos
     */
    select?: Prisma.Detalle_PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Detalle_Pedidos
     */
    omit?: Prisma.Detalle_PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Detalle_PedidosInclude<ExtArgs> | null;
    /**
     * Filter, which Detalle_Pedidos to fetch.
     */
    where?: Prisma.Detalle_PedidosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Detalle_Pedidos to fetch.
     */
    orderBy?: Prisma.Detalle_PedidosOrderByWithRelationInput | Prisma.Detalle_PedidosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Detalle_Pedidos.
     */
    cursor?: Prisma.Detalle_PedidosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Detalle_Pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Detalle_Pedidos.
     */
    skip?: number;
    distinct?: Prisma.Detalle_PedidosScalarFieldEnum | Prisma.Detalle_PedidosScalarFieldEnum[];
};
/**
 * Detalle_Pedidos create
 */
export type Detalle_PedidosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_Pedidos
     */
    select?: Prisma.Detalle_PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Detalle_Pedidos
     */
    omit?: Prisma.Detalle_PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Detalle_PedidosInclude<ExtArgs> | null;
    /**
     * The data needed to create a Detalle_Pedidos.
     */
    data: Prisma.XOR<Prisma.Detalle_PedidosCreateInput, Prisma.Detalle_PedidosUncheckedCreateInput>;
};
/**
 * Detalle_Pedidos createMany
 */
export type Detalle_PedidosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detalle_Pedidos.
     */
    data: Prisma.Detalle_PedidosCreateManyInput | Prisma.Detalle_PedidosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Detalle_Pedidos createManyAndReturn
 */
export type Detalle_PedidosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_Pedidos
     */
    select?: Prisma.Detalle_PedidosSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Detalle_Pedidos
     */
    omit?: Prisma.Detalle_PedidosOmit<ExtArgs> | null;
    /**
     * The data used to create many Detalle_Pedidos.
     */
    data: Prisma.Detalle_PedidosCreateManyInput | Prisma.Detalle_PedidosCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Detalle_PedidosIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Detalle_Pedidos update
 */
export type Detalle_PedidosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_Pedidos
     */
    select?: Prisma.Detalle_PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Detalle_Pedidos
     */
    omit?: Prisma.Detalle_PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Detalle_PedidosInclude<ExtArgs> | null;
    /**
     * The data needed to update a Detalle_Pedidos.
     */
    data: Prisma.XOR<Prisma.Detalle_PedidosUpdateInput, Prisma.Detalle_PedidosUncheckedUpdateInput>;
    /**
     * Choose, which Detalle_Pedidos to update.
     */
    where: Prisma.Detalle_PedidosWhereUniqueInput;
};
/**
 * Detalle_Pedidos updateMany
 */
export type Detalle_PedidosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Detalle_Pedidos.
     */
    data: Prisma.XOR<Prisma.Detalle_PedidosUpdateManyMutationInput, Prisma.Detalle_PedidosUncheckedUpdateManyInput>;
    /**
     * Filter which Detalle_Pedidos to update
     */
    where?: Prisma.Detalle_PedidosWhereInput;
    /**
     * Limit how many Detalle_Pedidos to update.
     */
    limit?: number;
};
/**
 * Detalle_Pedidos updateManyAndReturn
 */
export type Detalle_PedidosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_Pedidos
     */
    select?: Prisma.Detalle_PedidosSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Detalle_Pedidos
     */
    omit?: Prisma.Detalle_PedidosOmit<ExtArgs> | null;
    /**
     * The data used to update Detalle_Pedidos.
     */
    data: Prisma.XOR<Prisma.Detalle_PedidosUpdateManyMutationInput, Prisma.Detalle_PedidosUncheckedUpdateManyInput>;
    /**
     * Filter which Detalle_Pedidos to update
     */
    where?: Prisma.Detalle_PedidosWhereInput;
    /**
     * Limit how many Detalle_Pedidos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Detalle_PedidosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Detalle_Pedidos upsert
 */
export type Detalle_PedidosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_Pedidos
     */
    select?: Prisma.Detalle_PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Detalle_Pedidos
     */
    omit?: Prisma.Detalle_PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Detalle_PedidosInclude<ExtArgs> | null;
    /**
     * The filter to search for the Detalle_Pedidos to update in case it exists.
     */
    where: Prisma.Detalle_PedidosWhereUniqueInput;
    /**
     * In case the Detalle_Pedidos found by the `where` argument doesn't exist, create a new Detalle_Pedidos with this data.
     */
    create: Prisma.XOR<Prisma.Detalle_PedidosCreateInput, Prisma.Detalle_PedidosUncheckedCreateInput>;
    /**
     * In case the Detalle_Pedidos was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Detalle_PedidosUpdateInput, Prisma.Detalle_PedidosUncheckedUpdateInput>;
};
/**
 * Detalle_Pedidos delete
 */
export type Detalle_PedidosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_Pedidos
     */
    select?: Prisma.Detalle_PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Detalle_Pedidos
     */
    omit?: Prisma.Detalle_PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Detalle_PedidosInclude<ExtArgs> | null;
    /**
     * Filter which Detalle_Pedidos to delete.
     */
    where: Prisma.Detalle_PedidosWhereUniqueInput;
};
/**
 * Detalle_Pedidos deleteMany
 */
export type Detalle_PedidosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Detalle_Pedidos to delete
     */
    where?: Prisma.Detalle_PedidosWhereInput;
    /**
     * Limit how many Detalle_Pedidos to delete.
     */
    limit?: number;
};
/**
 * Detalle_Pedidos without action
 */
export type Detalle_PedidosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_Pedidos
     */
    select?: Prisma.Detalle_PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Detalle_Pedidos
     */
    omit?: Prisma.Detalle_PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Detalle_PedidosInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Detalle_Pedidos.d.ts.map