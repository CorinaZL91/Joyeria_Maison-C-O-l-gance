import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Pedidos
 *
 */
export type PedidosModel = runtime.Types.Result.DefaultSelection<Prisma.$PedidosPayload>;
export type AggregatePedidos = {
    _count: PedidosCountAggregateOutputType | null;
    _avg: PedidosAvgAggregateOutputType | null;
    _sum: PedidosSumAggregateOutputType | null;
    _min: PedidosMinAggregateOutputType | null;
    _max: PedidosMaxAggregateOutputType | null;
};
export type PedidosAvgAggregateOutputType = {
    id_pedido: number | null;
    id_usuario: number | null;
    total: runtime.Decimal | null;
};
export type PedidosSumAggregateOutputType = {
    id_pedido: number | null;
    id_usuario: number | null;
    total: runtime.Decimal | null;
};
export type PedidosMinAggregateOutputType = {
    id_pedido: number | null;
    id_usuario: number | null;
    fecha_pedido: Date | null;
    total: runtime.Decimal | null;
    estado_envio: $Enums.EstadoEnvio | null;
    metodo_pago: string | null;
    direccion_entrega: string | null;
};
export type PedidosMaxAggregateOutputType = {
    id_pedido: number | null;
    id_usuario: number | null;
    fecha_pedido: Date | null;
    total: runtime.Decimal | null;
    estado_envio: $Enums.EstadoEnvio | null;
    metodo_pago: string | null;
    direccion_entrega: string | null;
};
export type PedidosCountAggregateOutputType = {
    id_pedido: number;
    id_usuario: number;
    fecha_pedido: number;
    total: number;
    estado_envio: number;
    metodo_pago: number;
    direccion_entrega: number;
    _all: number;
};
export type PedidosAvgAggregateInputType = {
    id_pedido?: true;
    id_usuario?: true;
    total?: true;
};
export type PedidosSumAggregateInputType = {
    id_pedido?: true;
    id_usuario?: true;
    total?: true;
};
export type PedidosMinAggregateInputType = {
    id_pedido?: true;
    id_usuario?: true;
    fecha_pedido?: true;
    total?: true;
    estado_envio?: true;
    metodo_pago?: true;
    direccion_entrega?: true;
};
export type PedidosMaxAggregateInputType = {
    id_pedido?: true;
    id_usuario?: true;
    fecha_pedido?: true;
    total?: true;
    estado_envio?: true;
    metodo_pago?: true;
    direccion_entrega?: true;
};
export type PedidosCountAggregateInputType = {
    id_pedido?: true;
    id_usuario?: true;
    fecha_pedido?: true;
    total?: true;
    estado_envio?: true;
    metodo_pago?: true;
    direccion_entrega?: true;
    _all?: true;
};
export type PedidosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to aggregate.
     */
    where?: Prisma.PedidosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: Prisma.PedidosOrderByWithRelationInput | Prisma.PedidosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PedidosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Pedidos
    **/
    _count?: true | PedidosCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PedidosAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PedidosSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PedidosMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PedidosMaxAggregateInputType;
};
export type GetPedidosAggregateType<T extends PedidosAggregateArgs> = {
    [P in keyof T & keyof AggregatePedidos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePedidos[P]> : Prisma.GetScalarType<T[P], AggregatePedidos[P]>;
};
export type PedidosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PedidosWhereInput;
    orderBy?: Prisma.PedidosOrderByWithAggregationInput | Prisma.PedidosOrderByWithAggregationInput[];
    by: Prisma.PedidosScalarFieldEnum[] | Prisma.PedidosScalarFieldEnum;
    having?: Prisma.PedidosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PedidosCountAggregateInputType | true;
    _avg?: PedidosAvgAggregateInputType;
    _sum?: PedidosSumAggregateInputType;
    _min?: PedidosMinAggregateInputType;
    _max?: PedidosMaxAggregateInputType;
};
export type PedidosGroupByOutputType = {
    id_pedido: number;
    id_usuario: number;
    fecha_pedido: Date;
    total: runtime.Decimal;
    estado_envio: $Enums.EstadoEnvio;
    metodo_pago: string;
    direccion_entrega: string;
    _count: PedidosCountAggregateOutputType | null;
    _avg: PedidosAvgAggregateOutputType | null;
    _sum: PedidosSumAggregateOutputType | null;
    _min: PedidosMinAggregateOutputType | null;
    _max: PedidosMaxAggregateOutputType | null;
};
type GetPedidosGroupByPayload<T extends PedidosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PedidosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PedidosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PedidosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PedidosGroupByOutputType[P]>;
}>>;
export type PedidosWhereInput = {
    AND?: Prisma.PedidosWhereInput | Prisma.PedidosWhereInput[];
    OR?: Prisma.PedidosWhereInput[];
    NOT?: Prisma.PedidosWhereInput | Prisma.PedidosWhereInput[];
    id_pedido?: Prisma.IntFilter<"Pedidos"> | number;
    id_usuario?: Prisma.IntFilter<"Pedidos"> | number;
    fecha_pedido?: Prisma.DateTimeFilter<"Pedidos"> | Date | string;
    total?: Prisma.DecimalFilter<"Pedidos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioFilter<"Pedidos"> | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringFilter<"Pedidos"> | string;
    direccion_entrega?: Prisma.StringFilter<"Pedidos"> | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    detalle_pedidos?: Prisma.Detalle_PedidosListRelationFilter;
};
export type PedidosOrderByWithRelationInput = {
    id_pedido?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    fecha_pedido?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado_envio?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    direccion_entrega?: Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
    detalle_pedidos?: Prisma.Detalle_PedidosOrderByRelationAggregateInput;
};
export type PedidosWhereUniqueInput = Prisma.AtLeast<{
    id_pedido?: number;
    AND?: Prisma.PedidosWhereInput | Prisma.PedidosWhereInput[];
    OR?: Prisma.PedidosWhereInput[];
    NOT?: Prisma.PedidosWhereInput | Prisma.PedidosWhereInput[];
    id_usuario?: Prisma.IntFilter<"Pedidos"> | number;
    fecha_pedido?: Prisma.DateTimeFilter<"Pedidos"> | Date | string;
    total?: Prisma.DecimalFilter<"Pedidos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioFilter<"Pedidos"> | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringFilter<"Pedidos"> | string;
    direccion_entrega?: Prisma.StringFilter<"Pedidos"> | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    detalle_pedidos?: Prisma.Detalle_PedidosListRelationFilter;
}, "id_pedido">;
export type PedidosOrderByWithAggregationInput = {
    id_pedido?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    fecha_pedido?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado_envio?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    direccion_entrega?: Prisma.SortOrder;
    _count?: Prisma.PedidosCountOrderByAggregateInput;
    _avg?: Prisma.PedidosAvgOrderByAggregateInput;
    _max?: Prisma.PedidosMaxOrderByAggregateInput;
    _min?: Prisma.PedidosMinOrderByAggregateInput;
    _sum?: Prisma.PedidosSumOrderByAggregateInput;
};
export type PedidosScalarWhereWithAggregatesInput = {
    AND?: Prisma.PedidosScalarWhereWithAggregatesInput | Prisma.PedidosScalarWhereWithAggregatesInput[];
    OR?: Prisma.PedidosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PedidosScalarWhereWithAggregatesInput | Prisma.PedidosScalarWhereWithAggregatesInput[];
    id_pedido?: Prisma.IntWithAggregatesFilter<"Pedidos"> | number;
    id_usuario?: Prisma.IntWithAggregatesFilter<"Pedidos"> | number;
    fecha_pedido?: Prisma.DateTimeWithAggregatesFilter<"Pedidos"> | Date | string;
    total?: Prisma.DecimalWithAggregatesFilter<"Pedidos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioWithAggregatesFilter<"Pedidos"> | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringWithAggregatesFilter<"Pedidos"> | string;
    direccion_entrega?: Prisma.StringWithAggregatesFilter<"Pedidos"> | string;
};
export type PedidosCreateInput = {
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio: $Enums.EstadoEnvio;
    metodo_pago: string;
    direccion_entrega: string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutPedidosInput;
    detalle_pedidos?: Prisma.Detalle_PedidosCreateNestedManyWithoutPedidoInput;
};
export type PedidosUncheckedCreateInput = {
    id_pedido?: number;
    id_usuario: number;
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio: $Enums.EstadoEnvio;
    metodo_pago: string;
    direccion_entrega: string;
    detalle_pedidos?: Prisma.Detalle_PedidosUncheckedCreateNestedManyWithoutPedidoInput;
};
export type PedidosUpdateInput = {
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioFieldUpdateOperationsInput | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_entrega?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutPedidosNestedInput;
    detalle_pedidos?: Prisma.Detalle_PedidosUpdateManyWithoutPedidoNestedInput;
};
export type PedidosUncheckedUpdateInput = {
    id_pedido?: Prisma.IntFieldUpdateOperationsInput | number;
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioFieldUpdateOperationsInput | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_entrega?: Prisma.StringFieldUpdateOperationsInput | string;
    detalle_pedidos?: Prisma.Detalle_PedidosUncheckedUpdateManyWithoutPedidoNestedInput;
};
export type PedidosCreateManyInput = {
    id_pedido?: number;
    id_usuario: number;
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio: $Enums.EstadoEnvio;
    metodo_pago: string;
    direccion_entrega: string;
};
export type PedidosUpdateManyMutationInput = {
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioFieldUpdateOperationsInput | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_entrega?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PedidosUncheckedUpdateManyInput = {
    id_pedido?: Prisma.IntFieldUpdateOperationsInput | number;
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioFieldUpdateOperationsInput | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_entrega?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PedidosCountOrderByAggregateInput = {
    id_pedido?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    fecha_pedido?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado_envio?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    direccion_entrega?: Prisma.SortOrder;
};
export type PedidosAvgOrderByAggregateInput = {
    id_pedido?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type PedidosMaxOrderByAggregateInput = {
    id_pedido?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    fecha_pedido?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado_envio?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    direccion_entrega?: Prisma.SortOrder;
};
export type PedidosMinOrderByAggregateInput = {
    id_pedido?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    fecha_pedido?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado_envio?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    direccion_entrega?: Prisma.SortOrder;
};
export type PedidosSumOrderByAggregateInput = {
    id_pedido?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type PedidosScalarRelationFilter = {
    is?: Prisma.PedidosWhereInput;
    isNot?: Prisma.PedidosWhereInput;
};
export type PedidosListRelationFilter = {
    every?: Prisma.PedidosWhereInput;
    some?: Prisma.PedidosWhereInput;
    none?: Prisma.PedidosWhereInput;
};
export type PedidosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type EnumEstadoEnvioFieldUpdateOperationsInput = {
    set?: $Enums.EstadoEnvio;
};
export type PedidosCreateNestedOneWithoutDetalle_pedidosInput = {
    create?: Prisma.XOR<Prisma.PedidosCreateWithoutDetalle_pedidosInput, Prisma.PedidosUncheckedCreateWithoutDetalle_pedidosInput>;
    connectOrCreate?: Prisma.PedidosCreateOrConnectWithoutDetalle_pedidosInput;
    connect?: Prisma.PedidosWhereUniqueInput;
};
export type PedidosUpdateOneRequiredWithoutDetalle_pedidosNestedInput = {
    create?: Prisma.XOR<Prisma.PedidosCreateWithoutDetalle_pedidosInput, Prisma.PedidosUncheckedCreateWithoutDetalle_pedidosInput>;
    connectOrCreate?: Prisma.PedidosCreateOrConnectWithoutDetalle_pedidosInput;
    upsert?: Prisma.PedidosUpsertWithoutDetalle_pedidosInput;
    connect?: Prisma.PedidosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PedidosUpdateToOneWithWhereWithoutDetalle_pedidosInput, Prisma.PedidosUpdateWithoutDetalle_pedidosInput>, Prisma.PedidosUncheckedUpdateWithoutDetalle_pedidosInput>;
};
export type PedidosCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.PedidosCreateWithoutUsuarioInput, Prisma.PedidosUncheckedCreateWithoutUsuarioInput> | Prisma.PedidosCreateWithoutUsuarioInput[] | Prisma.PedidosUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.PedidosCreateOrConnectWithoutUsuarioInput | Prisma.PedidosCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.PedidosCreateManyUsuarioInputEnvelope;
    connect?: Prisma.PedidosWhereUniqueInput | Prisma.PedidosWhereUniqueInput[];
};
export type PedidosUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.PedidosCreateWithoutUsuarioInput, Prisma.PedidosUncheckedCreateWithoutUsuarioInput> | Prisma.PedidosCreateWithoutUsuarioInput[] | Prisma.PedidosUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.PedidosCreateOrConnectWithoutUsuarioInput | Prisma.PedidosCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.PedidosCreateManyUsuarioInputEnvelope;
    connect?: Prisma.PedidosWhereUniqueInput | Prisma.PedidosWhereUniqueInput[];
};
export type PedidosUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.PedidosCreateWithoutUsuarioInput, Prisma.PedidosUncheckedCreateWithoutUsuarioInput> | Prisma.PedidosCreateWithoutUsuarioInput[] | Prisma.PedidosUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.PedidosCreateOrConnectWithoutUsuarioInput | Prisma.PedidosCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.PedidosUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.PedidosUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.PedidosCreateManyUsuarioInputEnvelope;
    set?: Prisma.PedidosWhereUniqueInput | Prisma.PedidosWhereUniqueInput[];
    disconnect?: Prisma.PedidosWhereUniqueInput | Prisma.PedidosWhereUniqueInput[];
    delete?: Prisma.PedidosWhereUniqueInput | Prisma.PedidosWhereUniqueInput[];
    connect?: Prisma.PedidosWhereUniqueInput | Prisma.PedidosWhereUniqueInput[];
    update?: Prisma.PedidosUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.PedidosUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.PedidosUpdateManyWithWhereWithoutUsuarioInput | Prisma.PedidosUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.PedidosScalarWhereInput | Prisma.PedidosScalarWhereInput[];
};
export type PedidosUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.PedidosCreateWithoutUsuarioInput, Prisma.PedidosUncheckedCreateWithoutUsuarioInput> | Prisma.PedidosCreateWithoutUsuarioInput[] | Prisma.PedidosUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.PedidosCreateOrConnectWithoutUsuarioInput | Prisma.PedidosCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.PedidosUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.PedidosUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.PedidosCreateManyUsuarioInputEnvelope;
    set?: Prisma.PedidosWhereUniqueInput | Prisma.PedidosWhereUniqueInput[];
    disconnect?: Prisma.PedidosWhereUniqueInput | Prisma.PedidosWhereUniqueInput[];
    delete?: Prisma.PedidosWhereUniqueInput | Prisma.PedidosWhereUniqueInput[];
    connect?: Prisma.PedidosWhereUniqueInput | Prisma.PedidosWhereUniqueInput[];
    update?: Prisma.PedidosUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.PedidosUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.PedidosUpdateManyWithWhereWithoutUsuarioInput | Prisma.PedidosUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.PedidosScalarWhereInput | Prisma.PedidosScalarWhereInput[];
};
export type PedidosCreateWithoutDetalle_pedidosInput = {
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio: $Enums.EstadoEnvio;
    metodo_pago: string;
    direccion_entrega: string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutPedidosInput;
};
export type PedidosUncheckedCreateWithoutDetalle_pedidosInput = {
    id_pedido?: number;
    id_usuario: number;
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio: $Enums.EstadoEnvio;
    metodo_pago: string;
    direccion_entrega: string;
};
export type PedidosCreateOrConnectWithoutDetalle_pedidosInput = {
    where: Prisma.PedidosWhereUniqueInput;
    create: Prisma.XOR<Prisma.PedidosCreateWithoutDetalle_pedidosInput, Prisma.PedidosUncheckedCreateWithoutDetalle_pedidosInput>;
};
export type PedidosUpsertWithoutDetalle_pedidosInput = {
    update: Prisma.XOR<Prisma.PedidosUpdateWithoutDetalle_pedidosInput, Prisma.PedidosUncheckedUpdateWithoutDetalle_pedidosInput>;
    create: Prisma.XOR<Prisma.PedidosCreateWithoutDetalle_pedidosInput, Prisma.PedidosUncheckedCreateWithoutDetalle_pedidosInput>;
    where?: Prisma.PedidosWhereInput;
};
export type PedidosUpdateToOneWithWhereWithoutDetalle_pedidosInput = {
    where?: Prisma.PedidosWhereInput;
    data: Prisma.XOR<Prisma.PedidosUpdateWithoutDetalle_pedidosInput, Prisma.PedidosUncheckedUpdateWithoutDetalle_pedidosInput>;
};
export type PedidosUpdateWithoutDetalle_pedidosInput = {
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioFieldUpdateOperationsInput | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_entrega?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutPedidosNestedInput;
};
export type PedidosUncheckedUpdateWithoutDetalle_pedidosInput = {
    id_pedido?: Prisma.IntFieldUpdateOperationsInput | number;
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioFieldUpdateOperationsInput | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_entrega?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PedidosCreateWithoutUsuarioInput = {
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio: $Enums.EstadoEnvio;
    metodo_pago: string;
    direccion_entrega: string;
    detalle_pedidos?: Prisma.Detalle_PedidosCreateNestedManyWithoutPedidoInput;
};
export type PedidosUncheckedCreateWithoutUsuarioInput = {
    id_pedido?: number;
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio: $Enums.EstadoEnvio;
    metodo_pago: string;
    direccion_entrega: string;
    detalle_pedidos?: Prisma.Detalle_PedidosUncheckedCreateNestedManyWithoutPedidoInput;
};
export type PedidosCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.PedidosWhereUniqueInput;
    create: Prisma.XOR<Prisma.PedidosCreateWithoutUsuarioInput, Prisma.PedidosUncheckedCreateWithoutUsuarioInput>;
};
export type PedidosCreateManyUsuarioInputEnvelope = {
    data: Prisma.PedidosCreateManyUsuarioInput | Prisma.PedidosCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type PedidosUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.PedidosWhereUniqueInput;
    update: Prisma.XOR<Prisma.PedidosUpdateWithoutUsuarioInput, Prisma.PedidosUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.PedidosCreateWithoutUsuarioInput, Prisma.PedidosUncheckedCreateWithoutUsuarioInput>;
};
export type PedidosUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.PedidosWhereUniqueInput;
    data: Prisma.XOR<Prisma.PedidosUpdateWithoutUsuarioInput, Prisma.PedidosUncheckedUpdateWithoutUsuarioInput>;
};
export type PedidosUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.PedidosScalarWhereInput;
    data: Prisma.XOR<Prisma.PedidosUpdateManyMutationInput, Prisma.PedidosUncheckedUpdateManyWithoutUsuarioInput>;
};
export type PedidosScalarWhereInput = {
    AND?: Prisma.PedidosScalarWhereInput | Prisma.PedidosScalarWhereInput[];
    OR?: Prisma.PedidosScalarWhereInput[];
    NOT?: Prisma.PedidosScalarWhereInput | Prisma.PedidosScalarWhereInput[];
    id_pedido?: Prisma.IntFilter<"Pedidos"> | number;
    id_usuario?: Prisma.IntFilter<"Pedidos"> | number;
    fecha_pedido?: Prisma.DateTimeFilter<"Pedidos"> | Date | string;
    total?: Prisma.DecimalFilter<"Pedidos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioFilter<"Pedidos"> | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringFilter<"Pedidos"> | string;
    direccion_entrega?: Prisma.StringFilter<"Pedidos"> | string;
};
export type PedidosCreateManyUsuarioInput = {
    id_pedido?: number;
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio: $Enums.EstadoEnvio;
    metodo_pago: string;
    direccion_entrega: string;
};
export type PedidosUpdateWithoutUsuarioInput = {
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioFieldUpdateOperationsInput | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_entrega?: Prisma.StringFieldUpdateOperationsInput | string;
    detalle_pedidos?: Prisma.Detalle_PedidosUpdateManyWithoutPedidoNestedInput;
};
export type PedidosUncheckedUpdateWithoutUsuarioInput = {
    id_pedido?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioFieldUpdateOperationsInput | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_entrega?: Prisma.StringFieldUpdateOperationsInput | string;
    detalle_pedidos?: Prisma.Detalle_PedidosUncheckedUpdateManyWithoutPedidoNestedInput;
};
export type PedidosUncheckedUpdateManyWithoutUsuarioInput = {
    id_pedido?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado_envio?: Prisma.EnumEstadoEnvioFieldUpdateOperationsInput | $Enums.EstadoEnvio;
    metodo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_entrega?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type PedidosCountOutputType
 */
export type PedidosCountOutputType = {
    detalle_pedidos: number;
};
export type PedidosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalle_pedidos?: boolean | PedidosCountOutputTypeCountDetalle_pedidosArgs;
};
/**
 * PedidosCountOutputType without action
 */
export type PedidosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosCountOutputType
     */
    select?: Prisma.PedidosCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PedidosCountOutputType without action
 */
export type PedidosCountOutputTypeCountDetalle_pedidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Detalle_PedidosWhereInput;
};
export type PedidosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_pedido?: boolean;
    id_usuario?: boolean;
    fecha_pedido?: boolean;
    total?: boolean;
    estado_envio?: boolean;
    metodo_pago?: boolean;
    direccion_entrega?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    detalle_pedidos?: boolean | Prisma.Pedidos$detalle_pedidosArgs<ExtArgs>;
    _count?: boolean | Prisma.PedidosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedidos"]>;
export type PedidosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_pedido?: boolean;
    id_usuario?: boolean;
    fecha_pedido?: boolean;
    total?: boolean;
    estado_envio?: boolean;
    metodo_pago?: boolean;
    direccion_entrega?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedidos"]>;
export type PedidosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_pedido?: boolean;
    id_usuario?: boolean;
    fecha_pedido?: boolean;
    total?: boolean;
    estado_envio?: boolean;
    metodo_pago?: boolean;
    direccion_entrega?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedidos"]>;
export type PedidosSelectScalar = {
    id_pedido?: boolean;
    id_usuario?: boolean;
    fecha_pedido?: boolean;
    total?: boolean;
    estado_envio?: boolean;
    metodo_pago?: boolean;
    direccion_entrega?: boolean;
};
export type PedidosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_pedido" | "id_usuario" | "fecha_pedido" | "total" | "estado_envio" | "metodo_pago" | "direccion_entrega", ExtArgs["result"]["pedidos"]>;
export type PedidosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    detalle_pedidos?: boolean | Prisma.Pedidos$detalle_pedidosArgs<ExtArgs>;
    _count?: boolean | Prisma.PedidosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PedidosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type PedidosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $PedidosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pedidos";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
        detalle_pedidos: Prisma.$Detalle_PedidosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_pedido: number;
        id_usuario: number;
        fecha_pedido: Date;
        total: runtime.Decimal;
        estado_envio: $Enums.EstadoEnvio;
        metodo_pago: string;
        direccion_entrega: string;
    }, ExtArgs["result"]["pedidos"]>;
    composites: {};
};
export type PedidosGetPayload<S extends boolean | null | undefined | PedidosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PedidosPayload, S>;
export type PedidosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PedidosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PedidosCountAggregateInputType | true;
};
export interface PedidosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pedidos'];
        meta: {
            name: 'Pedidos';
        };
    };
    /**
     * Find zero or one Pedidos that matches the filter.
     * @param {PedidosFindUniqueArgs} args - Arguments to find a Pedidos
     * @example
     * // Get one Pedidos
     * const pedidos = await prisma.pedidos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidosFindUniqueArgs>(args: Prisma.SelectSubset<T, PedidosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PedidosClient<runtime.Types.Result.GetResult<Prisma.$PedidosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Pedidos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidosFindUniqueOrThrowArgs} args - Arguments to find a Pedidos
     * @example
     * // Get one Pedidos
     * const pedidos = await prisma.pedidos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PedidosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PedidosClient<runtime.Types.Result.GetResult<Prisma.$PedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosFindFirstArgs} args - Arguments to find a Pedidos
     * @example
     * // Get one Pedidos
     * const pedidos = await prisma.pedidos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidosFindFirstArgs>(args?: Prisma.SelectSubset<T, PedidosFindFirstArgs<ExtArgs>>): Prisma.Prisma__PedidosClient<runtime.Types.Result.GetResult<Prisma.$PedidosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pedidos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosFindFirstOrThrowArgs} args - Arguments to find a Pedidos
     * @example
     * // Get one Pedidos
     * const pedidos = await prisma.pedidos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PedidosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PedidosClient<runtime.Types.Result.GetResult<Prisma.$PedidosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedidos.findMany()
     *
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedidos.findMany({ take: 10 })
     *
     * // Only select the `id_pedido`
     * const pedidosWithId_pedidoOnly = await prisma.pedidos.findMany({ select: { id_pedido: true } })
     *
     */
    findMany<T extends PedidosFindManyArgs>(args?: Prisma.SelectSubset<T, PedidosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Pedidos.
     * @param {PedidosCreateArgs} args - Arguments to create a Pedidos.
     * @example
     * // Create one Pedidos
     * const Pedidos = await prisma.pedidos.create({
     *   data: {
     *     // ... data to create a Pedidos
     *   }
     * })
     *
     */
    create<T extends PedidosCreateArgs>(args: Prisma.SelectSubset<T, PedidosCreateArgs<ExtArgs>>): Prisma.Prisma__PedidosClient<runtime.Types.Result.GetResult<Prisma.$PedidosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Pedidos.
     * @param {PedidosCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedidos = await prisma.pedidos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PedidosCreateManyArgs>(args?: Prisma.SelectSubset<T, PedidosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidosCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedidos = await prisma.pedidos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Pedidos and only return the `id_pedido`
     * const pedidosWithId_pedidoOnly = await prisma.pedidos.createManyAndReturn({
     *   select: { id_pedido: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PedidosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PedidosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Pedidos.
     * @param {PedidosDeleteArgs} args - Arguments to delete one Pedidos.
     * @example
     * // Delete one Pedidos
     * const Pedidos = await prisma.pedidos.delete({
     *   where: {
     *     // ... filter to delete one Pedidos
     *   }
     * })
     *
     */
    delete<T extends PedidosDeleteArgs>(args: Prisma.SelectSubset<T, PedidosDeleteArgs<ExtArgs>>): Prisma.Prisma__PedidosClient<runtime.Types.Result.GetResult<Prisma.$PedidosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Pedidos.
     * @param {PedidosUpdateArgs} args - Arguments to update one Pedidos.
     * @example
     * // Update one Pedidos
     * const pedidos = await prisma.pedidos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PedidosUpdateArgs>(args: Prisma.SelectSubset<T, PedidosUpdateArgs<ExtArgs>>): Prisma.Prisma__PedidosClient<runtime.Types.Result.GetResult<Prisma.$PedidosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Pedidos.
     * @param {PedidosDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedidos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PedidosDeleteManyArgs>(args?: Prisma.SelectSubset<T, PedidosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedidos = await prisma.pedidos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PedidosUpdateManyArgs>(args: Prisma.SelectSubset<T, PedidosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidosUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedidos = await prisma.pedidos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Pedidos and only return the `id_pedido`
     * const pedidosWithId_pedidoOnly = await prisma.pedidos.updateManyAndReturn({
     *   select: { id_pedido: true },
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
    updateManyAndReturn<T extends PedidosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PedidosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Pedidos.
     * @param {PedidosUpsertArgs} args - Arguments to update or create a Pedidos.
     * @example
     * // Update or create a Pedidos
     * const pedidos = await prisma.pedidos.upsert({
     *   create: {
     *     // ... data to create a Pedidos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedidos we want to update
     *   }
     * })
     */
    upsert<T extends PedidosUpsertArgs>(args: Prisma.SelectSubset<T, PedidosUpsertArgs<ExtArgs>>): Prisma.Prisma__PedidosClient<runtime.Types.Result.GetResult<Prisma.$PedidosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedidos.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidosCountArgs>(args?: Prisma.Subset<T, PedidosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PedidosCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidosAggregateArgs>(args: Prisma.Subset<T, PedidosAggregateArgs>): Prisma.PrismaPromise<GetPedidosAggregateType<T>>;
    /**
     * Group by Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PedidosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PedidosGroupByArgs['orderBy'];
    } : {
        orderBy?: PedidosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PedidosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Pedidos model
     */
    readonly fields: PedidosFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Pedidos.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PedidosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    detalle_pedidos<T extends Prisma.Pedidos$detalle_pedidosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pedidos$detalle_pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Pedidos model
 */
export interface PedidosFieldRefs {
    readonly id_pedido: Prisma.FieldRef<"Pedidos", 'Int'>;
    readonly id_usuario: Prisma.FieldRef<"Pedidos", 'Int'>;
    readonly fecha_pedido: Prisma.FieldRef<"Pedidos", 'DateTime'>;
    readonly total: Prisma.FieldRef<"Pedidos", 'Decimal'>;
    readonly estado_envio: Prisma.FieldRef<"Pedidos", 'EstadoEnvio'>;
    readonly metodo_pago: Prisma.FieldRef<"Pedidos", 'String'>;
    readonly direccion_entrega: Prisma.FieldRef<"Pedidos", 'String'>;
}
/**
 * Pedidos findUnique
 */
export type PedidosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedidos
     */
    select?: Prisma.PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedidos
     */
    omit?: Prisma.PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidosInclude<ExtArgs> | null;
    /**
     * Filter, which Pedidos to fetch.
     */
    where: Prisma.PedidosWhereUniqueInput;
};
/**
 * Pedidos findUniqueOrThrow
 */
export type PedidosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedidos
     */
    select?: Prisma.PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedidos
     */
    omit?: Prisma.PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidosInclude<ExtArgs> | null;
    /**
     * Filter, which Pedidos to fetch.
     */
    where: Prisma.PedidosWhereUniqueInput;
};
/**
 * Pedidos findFirst
 */
export type PedidosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedidos
     */
    select?: Prisma.PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedidos
     */
    omit?: Prisma.PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidosInclude<ExtArgs> | null;
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: Prisma.PedidosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: Prisma.PedidosOrderByWithRelationInput | Prisma.PedidosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pedidos.
     */
    cursor?: Prisma.PedidosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pedidos.
     */
    distinct?: Prisma.PedidosScalarFieldEnum | Prisma.PedidosScalarFieldEnum[];
};
/**
 * Pedidos findFirstOrThrow
 */
export type PedidosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedidos
     */
    select?: Prisma.PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedidos
     */
    omit?: Prisma.PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidosInclude<ExtArgs> | null;
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: Prisma.PedidosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: Prisma.PedidosOrderByWithRelationInput | Prisma.PedidosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pedidos.
     */
    cursor?: Prisma.PedidosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pedidos.
     */
    distinct?: Prisma.PedidosScalarFieldEnum | Prisma.PedidosScalarFieldEnum[];
};
/**
 * Pedidos findMany
 */
export type PedidosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedidos
     */
    select?: Prisma.PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedidos
     */
    omit?: Prisma.PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidosInclude<ExtArgs> | null;
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: Prisma.PedidosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: Prisma.PedidosOrderByWithRelationInput | Prisma.PedidosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Pedidos.
     */
    cursor?: Prisma.PedidosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pedidos.
     */
    skip?: number;
    distinct?: Prisma.PedidosScalarFieldEnum | Prisma.PedidosScalarFieldEnum[];
};
/**
 * Pedidos create
 */
export type PedidosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedidos
     */
    select?: Prisma.PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedidos
     */
    omit?: Prisma.PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidosInclude<ExtArgs> | null;
    /**
     * The data needed to create a Pedidos.
     */
    data: Prisma.XOR<Prisma.PedidosCreateInput, Prisma.PedidosUncheckedCreateInput>;
};
/**
 * Pedidos createMany
 */
export type PedidosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: Prisma.PedidosCreateManyInput | Prisma.PedidosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Pedidos createManyAndReturn
 */
export type PedidosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedidos
     */
    select?: Prisma.PedidosSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedidos
     */
    omit?: Prisma.PedidosOmit<ExtArgs> | null;
    /**
     * The data used to create many Pedidos.
     */
    data: Prisma.PedidosCreateManyInput | Prisma.PedidosCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidosIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Pedidos update
 */
export type PedidosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedidos
     */
    select?: Prisma.PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedidos
     */
    omit?: Prisma.PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidosInclude<ExtArgs> | null;
    /**
     * The data needed to update a Pedidos.
     */
    data: Prisma.XOR<Prisma.PedidosUpdateInput, Prisma.PedidosUncheckedUpdateInput>;
    /**
     * Choose, which Pedidos to update.
     */
    where: Prisma.PedidosWhereUniqueInput;
};
/**
 * Pedidos updateMany
 */
export type PedidosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: Prisma.XOR<Prisma.PedidosUpdateManyMutationInput, Prisma.PedidosUncheckedUpdateManyInput>;
    /**
     * Filter which Pedidos to update
     */
    where?: Prisma.PedidosWhereInput;
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number;
};
/**
 * Pedidos updateManyAndReturn
 */
export type PedidosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedidos
     */
    select?: Prisma.PedidosSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedidos
     */
    omit?: Prisma.PedidosOmit<ExtArgs> | null;
    /**
     * The data used to update Pedidos.
     */
    data: Prisma.XOR<Prisma.PedidosUpdateManyMutationInput, Prisma.PedidosUncheckedUpdateManyInput>;
    /**
     * Filter which Pedidos to update
     */
    where?: Prisma.PedidosWhereInput;
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Pedidos upsert
 */
export type PedidosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedidos
     */
    select?: Prisma.PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedidos
     */
    omit?: Prisma.PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidosInclude<ExtArgs> | null;
    /**
     * The filter to search for the Pedidos to update in case it exists.
     */
    where: Prisma.PedidosWhereUniqueInput;
    /**
     * In case the Pedidos found by the `where` argument doesn't exist, create a new Pedidos with this data.
     */
    create: Prisma.XOR<Prisma.PedidosCreateInput, Prisma.PedidosUncheckedCreateInput>;
    /**
     * In case the Pedidos was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PedidosUpdateInput, Prisma.PedidosUncheckedUpdateInput>;
};
/**
 * Pedidos delete
 */
export type PedidosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedidos
     */
    select?: Prisma.PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedidos
     */
    omit?: Prisma.PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidosInclude<ExtArgs> | null;
    /**
     * Filter which Pedidos to delete.
     */
    where: Prisma.PedidosWhereUniqueInput;
};
/**
 * Pedidos deleteMany
 */
export type PedidosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: Prisma.PedidosWhereInput;
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number;
};
/**
 * Pedidos.detalle_pedidos
 */
export type Pedidos$detalle_pedidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.Detalle_PedidosWhereInput;
    orderBy?: Prisma.Detalle_PedidosOrderByWithRelationInput | Prisma.Detalle_PedidosOrderByWithRelationInput[];
    cursor?: Prisma.Detalle_PedidosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Detalle_PedidosScalarFieldEnum | Prisma.Detalle_PedidosScalarFieldEnum[];
};
/**
 * Pedidos without action
 */
export type PedidosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedidos
     */
    select?: Prisma.PedidosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedidos
     */
    omit?: Prisma.PedidosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidosInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Pedidos.d.ts.map