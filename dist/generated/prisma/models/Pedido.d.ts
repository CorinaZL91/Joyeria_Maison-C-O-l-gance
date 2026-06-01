import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Pedido
 *
 */
export type PedidoModel = runtime.Types.Result.DefaultSelection<Prisma.$PedidoPayload>;
export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null;
    _avg: PedidoAvgAggregateOutputType | null;
    _sum: PedidoSumAggregateOutputType | null;
    _min: PedidoMinAggregateOutputType | null;
    _max: PedidoMaxAggregateOutputType | null;
};
export type PedidoAvgAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
    total: runtime.Decimal | null;
};
export type PedidoSumAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
    total: runtime.Decimal | null;
};
export type PedidoMinAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
    fecha_pedido: Date | null;
    total: runtime.Decimal | null;
    metodo_pago: $Enums.MetodoPago | null;
    estado: $Enums.EstadoPedido | null;
    direccion_calle: string | null;
    direccion_ciudad: string | null;
    direccion_codigo_postal: string | null;
};
export type PedidoMaxAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
    fecha_pedido: Date | null;
    total: runtime.Decimal | null;
    metodo_pago: $Enums.MetodoPago | null;
    estado: $Enums.EstadoPedido | null;
    direccion_calle: string | null;
    direccion_ciudad: string | null;
    direccion_codigo_postal: string | null;
};
export type PedidoCountAggregateOutputType = {
    id: number;
    usuario_id: number;
    fecha_pedido: number;
    total: number;
    metodo_pago: number;
    estado: number;
    direccion_calle: number;
    direccion_ciudad: number;
    direccion_codigo_postal: number;
    _all: number;
};
export type PedidoAvgAggregateInputType = {
    id?: true;
    usuario_id?: true;
    total?: true;
};
export type PedidoSumAggregateInputType = {
    id?: true;
    usuario_id?: true;
    total?: true;
};
export type PedidoMinAggregateInputType = {
    id?: true;
    usuario_id?: true;
    fecha_pedido?: true;
    total?: true;
    metodo_pago?: true;
    estado?: true;
    direccion_calle?: true;
    direccion_ciudad?: true;
    direccion_codigo_postal?: true;
};
export type PedidoMaxAggregateInputType = {
    id?: true;
    usuario_id?: true;
    fecha_pedido?: true;
    total?: true;
    metodo_pago?: true;
    estado?: true;
    direccion_calle?: true;
    direccion_ciudad?: true;
    direccion_codigo_postal?: true;
};
export type PedidoCountAggregateInputType = {
    id?: true;
    usuario_id?: true;
    fecha_pedido?: true;
    total?: true;
    metodo_pago?: true;
    estado?: true;
    direccion_calle?: true;
    direccion_ciudad?: true;
    direccion_codigo_postal?: true;
    _all?: true;
};
export type PedidoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: Prisma.PedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: Prisma.PedidoOrderByWithRelationInput | Prisma.PedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PedidoWhereUniqueInput;
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
    _count?: true | PedidoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType;
};
export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
    [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePedido[P]> : Prisma.GetScalarType<T[P], AggregatePedido[P]>;
};
export type PedidoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PedidoWhereInput;
    orderBy?: Prisma.PedidoOrderByWithAggregationInput | Prisma.PedidoOrderByWithAggregationInput[];
    by: Prisma.PedidoScalarFieldEnum[] | Prisma.PedidoScalarFieldEnum;
    having?: Prisma.PedidoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PedidoCountAggregateInputType | true;
    _avg?: PedidoAvgAggregateInputType;
    _sum?: PedidoSumAggregateInputType;
    _min?: PedidoMinAggregateInputType;
    _max?: PedidoMaxAggregateInputType;
};
export type PedidoGroupByOutputType = {
    id: number;
    usuario_id: number;
    fecha_pedido: Date;
    total: runtime.Decimal;
    metodo_pago: $Enums.MetodoPago;
    estado: $Enums.EstadoPedido;
    direccion_calle: string | null;
    direccion_ciudad: string | null;
    direccion_codigo_postal: string | null;
    _count: PedidoCountAggregateOutputType | null;
    _avg: PedidoAvgAggregateOutputType | null;
    _sum: PedidoSumAggregateOutputType | null;
    _min: PedidoMinAggregateOutputType | null;
    _max: PedidoMaxAggregateOutputType | null;
};
type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PedidoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PedidoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PedidoGroupByOutputType[P]>;
}>>;
export type PedidoWhereInput = {
    AND?: Prisma.PedidoWhereInput | Prisma.PedidoWhereInput[];
    OR?: Prisma.PedidoWhereInput[];
    NOT?: Prisma.PedidoWhereInput | Prisma.PedidoWhereInput[];
    id?: Prisma.IntFilter<"Pedido"> | number;
    usuario_id?: Prisma.IntFilter<"Pedido"> | number;
    fecha_pedido?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    total?: Prisma.DecimalFilter<"Pedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoFilter<"Pedido"> | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoFilter<"Pedido"> | $Enums.EstadoPedido;
    direccion_calle?: Prisma.StringNullableFilter<"Pedido"> | string | null;
    direccion_ciudad?: Prisma.StringNullableFilter<"Pedido"> | string | null;
    direccion_codigo_postal?: Prisma.StringNullableFilter<"Pedido"> | string | null;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    detalles?: Prisma.DetallePedidoListRelationFilter;
};
export type PedidoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    fecha_pedido?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    direccion_calle?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion_ciudad?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion_codigo_postal?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
    detalles?: Prisma.DetallePedidoOrderByRelationAggregateInput;
};
export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PedidoWhereInput | Prisma.PedidoWhereInput[];
    OR?: Prisma.PedidoWhereInput[];
    NOT?: Prisma.PedidoWhereInput | Prisma.PedidoWhereInput[];
    usuario_id?: Prisma.IntFilter<"Pedido"> | number;
    fecha_pedido?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    total?: Prisma.DecimalFilter<"Pedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoFilter<"Pedido"> | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoFilter<"Pedido"> | $Enums.EstadoPedido;
    direccion_calle?: Prisma.StringNullableFilter<"Pedido"> | string | null;
    direccion_ciudad?: Prisma.StringNullableFilter<"Pedido"> | string | null;
    direccion_codigo_postal?: Prisma.StringNullableFilter<"Pedido"> | string | null;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    detalles?: Prisma.DetallePedidoListRelationFilter;
}, "id">;
export type PedidoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    fecha_pedido?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    direccion_calle?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion_ciudad?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion_codigo_postal?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PedidoCountOrderByAggregateInput;
    _avg?: Prisma.PedidoAvgOrderByAggregateInput;
    _max?: Prisma.PedidoMaxOrderByAggregateInput;
    _min?: Prisma.PedidoMinOrderByAggregateInput;
    _sum?: Prisma.PedidoSumOrderByAggregateInput;
};
export type PedidoScalarWhereWithAggregatesInput = {
    AND?: Prisma.PedidoScalarWhereWithAggregatesInput | Prisma.PedidoScalarWhereWithAggregatesInput[];
    OR?: Prisma.PedidoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PedidoScalarWhereWithAggregatesInput | Prisma.PedidoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Pedido"> | number;
    usuario_id?: Prisma.IntWithAggregatesFilter<"Pedido"> | number;
    fecha_pedido?: Prisma.DateTimeWithAggregatesFilter<"Pedido"> | Date | string;
    total?: Prisma.DecimalWithAggregatesFilter<"Pedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoWithAggregatesFilter<"Pedido"> | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoWithAggregatesFilter<"Pedido"> | $Enums.EstadoPedido;
    direccion_calle?: Prisma.StringNullableWithAggregatesFilter<"Pedido"> | string | null;
    direccion_ciudad?: Prisma.StringNullableWithAggregatesFilter<"Pedido"> | string | null;
    direccion_codigo_postal?: Prisma.StringNullableWithAggregatesFilter<"Pedido"> | string | null;
};
export type PedidoCreateInput = {
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago: $Enums.MetodoPago;
    estado?: $Enums.EstadoPedido;
    direccion_calle?: string | null;
    direccion_ciudad?: string | null;
    direccion_codigo_postal?: string | null;
    usuario: Prisma.UsuarioCreateNestedOneWithoutPedidosInput;
    detalles?: Prisma.DetallePedidoCreateNestedManyWithoutPedidoInput;
};
export type PedidoUncheckedCreateInput = {
    id?: number;
    usuario_id: number;
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago: $Enums.MetodoPago;
    estado?: $Enums.EstadoPedido;
    direccion_calle?: string | null;
    direccion_ciudad?: string | null;
    direccion_codigo_postal?: string | null;
    detalles?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutPedidoInput;
};
export type PedidoUpdateInput = {
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    direccion_calle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutPedidosNestedInput;
    detalles?: Prisma.DetallePedidoUpdateManyWithoutPedidoNestedInput;
};
export type PedidoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    direccion_calle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detalles?: Prisma.DetallePedidoUncheckedUpdateManyWithoutPedidoNestedInput;
};
export type PedidoCreateManyInput = {
    id?: number;
    usuario_id: number;
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago: $Enums.MetodoPago;
    estado?: $Enums.EstadoPedido;
    direccion_calle?: string | null;
    direccion_ciudad?: string | null;
    direccion_codigo_postal?: string | null;
};
export type PedidoUpdateManyMutationInput = {
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    direccion_calle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PedidoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    direccion_calle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PedidoListRelationFilter = {
    every?: Prisma.PedidoWhereInput;
    some?: Prisma.PedidoWhereInput;
    none?: Prisma.PedidoWhereInput;
};
export type PedidoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PedidoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    fecha_pedido?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    direccion_calle?: Prisma.SortOrder;
    direccion_ciudad?: Prisma.SortOrder;
    direccion_codigo_postal?: Prisma.SortOrder;
};
export type PedidoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type PedidoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    fecha_pedido?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    direccion_calle?: Prisma.SortOrder;
    direccion_ciudad?: Prisma.SortOrder;
    direccion_codigo_postal?: Prisma.SortOrder;
};
export type PedidoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    fecha_pedido?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    direccion_calle?: Prisma.SortOrder;
    direccion_ciudad?: Prisma.SortOrder;
    direccion_codigo_postal?: Prisma.SortOrder;
};
export type PedidoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type PedidoScalarRelationFilter = {
    is?: Prisma.PedidoWhereInput;
    isNot?: Prisma.PedidoWhereInput;
};
export type PedidoCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutUsuarioInput, Prisma.PedidoUncheckedCreateWithoutUsuarioInput> | Prisma.PedidoCreateWithoutUsuarioInput[] | Prisma.PedidoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutUsuarioInput | Prisma.PedidoCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.PedidoCreateManyUsuarioInputEnvelope;
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
};
export type PedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutUsuarioInput, Prisma.PedidoUncheckedCreateWithoutUsuarioInput> | Prisma.PedidoCreateWithoutUsuarioInput[] | Prisma.PedidoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutUsuarioInput | Prisma.PedidoCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.PedidoCreateManyUsuarioInputEnvelope;
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
};
export type PedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutUsuarioInput, Prisma.PedidoUncheckedCreateWithoutUsuarioInput> | Prisma.PedidoCreateWithoutUsuarioInput[] | Prisma.PedidoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutUsuarioInput | Prisma.PedidoCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.PedidoUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.PedidoUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.PedidoCreateManyUsuarioInputEnvelope;
    set?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    disconnect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    delete?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    update?: Prisma.PedidoUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.PedidoUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.PedidoUpdateManyWithWhereWithoutUsuarioInput | Prisma.PedidoUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
};
export type PedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutUsuarioInput, Prisma.PedidoUncheckedCreateWithoutUsuarioInput> | Prisma.PedidoCreateWithoutUsuarioInput[] | Prisma.PedidoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutUsuarioInput | Prisma.PedidoCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.PedidoUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.PedidoUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.PedidoCreateManyUsuarioInputEnvelope;
    set?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    disconnect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    delete?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    update?: Prisma.PedidoUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.PedidoUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.PedidoUpdateManyWithWhereWithoutUsuarioInput | Prisma.PedidoUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
};
export type EnumMetodoPagoFieldUpdateOperationsInput = {
    set?: $Enums.MetodoPago;
};
export type EnumEstadoPedidoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoPedido;
};
export type PedidoCreateNestedOneWithoutDetallesInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutDetallesInput, Prisma.PedidoUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutDetallesInput;
    connect?: Prisma.PedidoWhereUniqueInput;
};
export type PedidoUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutDetallesInput, Prisma.PedidoUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutDetallesInput;
    upsert?: Prisma.PedidoUpsertWithoutDetallesInput;
    connect?: Prisma.PedidoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PedidoUpdateToOneWithWhereWithoutDetallesInput, Prisma.PedidoUpdateWithoutDetallesInput>, Prisma.PedidoUncheckedUpdateWithoutDetallesInput>;
};
export type PedidoCreateWithoutUsuarioInput = {
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago: $Enums.MetodoPago;
    estado?: $Enums.EstadoPedido;
    direccion_calle?: string | null;
    direccion_ciudad?: string | null;
    direccion_codigo_postal?: string | null;
    detalles?: Prisma.DetallePedidoCreateNestedManyWithoutPedidoInput;
};
export type PedidoUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago: $Enums.MetodoPago;
    estado?: $Enums.EstadoPedido;
    direccion_calle?: string | null;
    direccion_ciudad?: string | null;
    direccion_codigo_postal?: string | null;
    detalles?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutPedidoInput;
};
export type PedidoCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.PedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutUsuarioInput, Prisma.PedidoUncheckedCreateWithoutUsuarioInput>;
};
export type PedidoCreateManyUsuarioInputEnvelope = {
    data: Prisma.PedidoCreateManyUsuarioInput | Prisma.PedidoCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type PedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.PedidoWhereUniqueInput;
    update: Prisma.XOR<Prisma.PedidoUpdateWithoutUsuarioInput, Prisma.PedidoUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutUsuarioInput, Prisma.PedidoUncheckedCreateWithoutUsuarioInput>;
};
export type PedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.PedidoWhereUniqueInput;
    data: Prisma.XOR<Prisma.PedidoUpdateWithoutUsuarioInput, Prisma.PedidoUncheckedUpdateWithoutUsuarioInput>;
};
export type PedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.PedidoScalarWhereInput;
    data: Prisma.XOR<Prisma.PedidoUpdateManyMutationInput, Prisma.PedidoUncheckedUpdateManyWithoutUsuarioInput>;
};
export type PedidoScalarWhereInput = {
    AND?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
    OR?: Prisma.PedidoScalarWhereInput[];
    NOT?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
    id?: Prisma.IntFilter<"Pedido"> | number;
    usuario_id?: Prisma.IntFilter<"Pedido"> | number;
    fecha_pedido?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    total?: Prisma.DecimalFilter<"Pedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoFilter<"Pedido"> | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoFilter<"Pedido"> | $Enums.EstadoPedido;
    direccion_calle?: Prisma.StringNullableFilter<"Pedido"> | string | null;
    direccion_ciudad?: Prisma.StringNullableFilter<"Pedido"> | string | null;
    direccion_codigo_postal?: Prisma.StringNullableFilter<"Pedido"> | string | null;
};
export type PedidoCreateWithoutDetallesInput = {
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago: $Enums.MetodoPago;
    estado?: $Enums.EstadoPedido;
    direccion_calle?: string | null;
    direccion_ciudad?: string | null;
    direccion_codigo_postal?: string | null;
    usuario: Prisma.UsuarioCreateNestedOneWithoutPedidosInput;
};
export type PedidoUncheckedCreateWithoutDetallesInput = {
    id?: number;
    usuario_id: number;
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago: $Enums.MetodoPago;
    estado?: $Enums.EstadoPedido;
    direccion_calle?: string | null;
    direccion_ciudad?: string | null;
    direccion_codigo_postal?: string | null;
};
export type PedidoCreateOrConnectWithoutDetallesInput = {
    where: Prisma.PedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutDetallesInput, Prisma.PedidoUncheckedCreateWithoutDetallesInput>;
};
export type PedidoUpsertWithoutDetallesInput = {
    update: Prisma.XOR<Prisma.PedidoUpdateWithoutDetallesInput, Prisma.PedidoUncheckedUpdateWithoutDetallesInput>;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutDetallesInput, Prisma.PedidoUncheckedCreateWithoutDetallesInput>;
    where?: Prisma.PedidoWhereInput;
};
export type PedidoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: Prisma.PedidoWhereInput;
    data: Prisma.XOR<Prisma.PedidoUpdateWithoutDetallesInput, Prisma.PedidoUncheckedUpdateWithoutDetallesInput>;
};
export type PedidoUpdateWithoutDetallesInput = {
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    direccion_calle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutPedidosNestedInput;
};
export type PedidoUncheckedUpdateWithoutDetallesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    direccion_calle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PedidoCreateManyUsuarioInput = {
    id?: number;
    fecha_pedido?: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago: $Enums.MetodoPago;
    estado?: $Enums.EstadoPedido;
    direccion_calle?: string | null;
    direccion_ciudad?: string | null;
    direccion_codigo_postal?: string | null;
};
export type PedidoUpdateWithoutUsuarioInput = {
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    direccion_calle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detalles?: Prisma.DetallePedidoUpdateManyWithoutPedidoNestedInput;
};
export type PedidoUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    direccion_calle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detalles?: Prisma.DetallePedidoUncheckedUpdateManyWithoutPedidoNestedInput;
};
export type PedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    direccion_calle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion_codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type PedidoCountOutputType
 */
export type PedidoCountOutputType = {
    detalles: number;
};
export type PedidoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalles?: boolean | PedidoCountOutputTypeCountDetallesArgs;
};
/**
 * PedidoCountOutputType without action
 */
export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: Prisma.PedidoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PedidoCountOutputType without action
 */
export type PedidoCountOutputTypeCountDetallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetallePedidoWhereInput;
};
export type PedidoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    fecha_pedido?: boolean;
    total?: boolean;
    metodo_pago?: boolean;
    estado?: boolean;
    direccion_calle?: boolean;
    direccion_ciudad?: boolean;
    direccion_codigo_postal?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    detalles?: boolean | Prisma.Pedido$detallesArgs<ExtArgs>;
    _count?: boolean | Prisma.PedidoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido"]>;
export type PedidoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    fecha_pedido?: boolean;
    total?: boolean;
    metodo_pago?: boolean;
    estado?: boolean;
    direccion_calle?: boolean;
    direccion_ciudad?: boolean;
    direccion_codigo_postal?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido"]>;
export type PedidoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    fecha_pedido?: boolean;
    total?: boolean;
    metodo_pago?: boolean;
    estado?: boolean;
    direccion_calle?: boolean;
    direccion_ciudad?: boolean;
    direccion_codigo_postal?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido"]>;
export type PedidoSelectScalar = {
    id?: boolean;
    usuario_id?: boolean;
    fecha_pedido?: boolean;
    total?: boolean;
    metodo_pago?: boolean;
    estado?: boolean;
    direccion_calle?: boolean;
    direccion_ciudad?: boolean;
    direccion_codigo_postal?: boolean;
};
export type PedidoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuario_id" | "fecha_pedido" | "total" | "metodo_pago" | "estado" | "direccion_calle" | "direccion_ciudad" | "direccion_codigo_postal", ExtArgs["result"]["pedido"]>;
export type PedidoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    detalles?: boolean | Prisma.Pedido$detallesArgs<ExtArgs>;
    _count?: boolean | Prisma.PedidoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PedidoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $PedidoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pedido";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
        detalles: Prisma.$DetallePedidoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        usuario_id: number;
        fecha_pedido: Date;
        total: runtime.Decimal;
        metodo_pago: $Enums.MetodoPago;
        estado: $Enums.EstadoPedido;
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
    }, ExtArgs["result"]["pedido"]>;
    composites: {};
};
export type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PedidoPayload, S>;
export type PedidoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PedidoCountAggregateInputType | true;
};
export interface PedidoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pedido'];
        meta: {
            name: 'Pedido';
        };
    };
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: Prisma.SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: Prisma.SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     *
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PedidoFindManyArgs>(args?: Prisma.SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     *
     */
    create<T extends PedidoCreateArgs>(args: Prisma.SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PedidoCreateManyArgs>(args?: Prisma.SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     *
     */
    delete<T extends PedidoDeleteArgs>(args: Prisma.SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PedidoUpdateArgs>(args: Prisma.SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: Prisma.SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: Prisma.SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: Prisma.SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(args?: Prisma.Subset<T, PedidoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PedidoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Prisma.Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>;
    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PedidoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PedidoGroupByArgs['orderBy'];
    } : {
        orderBy?: PedidoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Pedido model
     */
    readonly fields: PedidoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Pedido.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    detalles<T extends Prisma.Pedido$detallesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pedido$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Pedido model
 */
export interface PedidoFieldRefs {
    readonly id: Prisma.FieldRef<"Pedido", 'Int'>;
    readonly usuario_id: Prisma.FieldRef<"Pedido", 'Int'>;
    readonly fecha_pedido: Prisma.FieldRef<"Pedido", 'DateTime'>;
    readonly total: Prisma.FieldRef<"Pedido", 'Decimal'>;
    readonly metodo_pago: Prisma.FieldRef<"Pedido", 'MetodoPago'>;
    readonly estado: Prisma.FieldRef<"Pedido", 'EstadoPedido'>;
    readonly direccion_calle: Prisma.FieldRef<"Pedido", 'String'>;
    readonly direccion_ciudad: Prisma.FieldRef<"Pedido", 'String'>;
    readonly direccion_codigo_postal: Prisma.FieldRef<"Pedido", 'String'>;
}
/**
 * Pedido findUnique
 */
export type PedidoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    /**
     * Filter, which Pedido to fetch.
     */
    where: Prisma.PedidoWhereUniqueInput;
};
/**
 * Pedido findUniqueOrThrow
 */
export type PedidoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    /**
     * Filter, which Pedido to fetch.
     */
    where: Prisma.PedidoWhereUniqueInput;
};
/**
 * Pedido findFirst
 */
export type PedidoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    /**
     * Filter, which Pedido to fetch.
     */
    where?: Prisma.PedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: Prisma.PedidoOrderByWithRelationInput | Prisma.PedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pedidos.
     */
    cursor?: Prisma.PedidoWhereUniqueInput;
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
    distinct?: Prisma.PedidoScalarFieldEnum | Prisma.PedidoScalarFieldEnum[];
};
/**
 * Pedido findFirstOrThrow
 */
export type PedidoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    /**
     * Filter, which Pedido to fetch.
     */
    where?: Prisma.PedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: Prisma.PedidoOrderByWithRelationInput | Prisma.PedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pedidos.
     */
    cursor?: Prisma.PedidoWhereUniqueInput;
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
    distinct?: Prisma.PedidoScalarFieldEnum | Prisma.PedidoScalarFieldEnum[];
};
/**
 * Pedido findMany
 */
export type PedidoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: Prisma.PedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: Prisma.PedidoOrderByWithRelationInput | Prisma.PedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Pedidos.
     */
    cursor?: Prisma.PedidoWhereUniqueInput;
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
    distinct?: Prisma.PedidoScalarFieldEnum | Prisma.PedidoScalarFieldEnum[];
};
/**
 * Pedido create
 */
export type PedidoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    /**
     * The data needed to create a Pedido.
     */
    data: Prisma.XOR<Prisma.PedidoCreateInput, Prisma.PedidoUncheckedCreateInput>;
};
/**
 * Pedido createMany
 */
export type PedidoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: Prisma.PedidoCreateManyInput | Prisma.PedidoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Pedido createManyAndReturn
 */
export type PedidoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * The data used to create many Pedidos.
     */
    data: Prisma.PedidoCreateManyInput | Prisma.PedidoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Pedido update
 */
export type PedidoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    /**
     * The data needed to update a Pedido.
     */
    data: Prisma.XOR<Prisma.PedidoUpdateInput, Prisma.PedidoUncheckedUpdateInput>;
    /**
     * Choose, which Pedido to update.
     */
    where: Prisma.PedidoWhereUniqueInput;
};
/**
 * Pedido updateMany
 */
export type PedidoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: Prisma.XOR<Prisma.PedidoUpdateManyMutationInput, Prisma.PedidoUncheckedUpdateManyInput>;
    /**
     * Filter which Pedidos to update
     */
    where?: Prisma.PedidoWhereInput;
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number;
};
/**
 * Pedido updateManyAndReturn
 */
export type PedidoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * The data used to update Pedidos.
     */
    data: Prisma.XOR<Prisma.PedidoUpdateManyMutationInput, Prisma.PedidoUncheckedUpdateManyInput>;
    /**
     * Filter which Pedidos to update
     */
    where?: Prisma.PedidoWhereInput;
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Pedido upsert
 */
export type PedidoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: Prisma.PedidoWhereUniqueInput;
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: Prisma.XOR<Prisma.PedidoCreateInput, Prisma.PedidoUncheckedCreateInput>;
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PedidoUpdateInput, Prisma.PedidoUncheckedUpdateInput>;
};
/**
 * Pedido delete
 */
export type PedidoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    /**
     * Filter which Pedido to delete.
     */
    where: Prisma.PedidoWhereUniqueInput;
};
/**
 * Pedido deleteMany
 */
export type PedidoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: Prisma.PedidoWhereInput;
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number;
};
/**
 * Pedido.detalles
 */
export type Pedido$detallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: Prisma.DetallePedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetallePedidoInclude<ExtArgs> | null;
    where?: Prisma.DetallePedidoWhereInput;
    orderBy?: Prisma.DetallePedidoOrderByWithRelationInput | Prisma.DetallePedidoOrderByWithRelationInput[];
    cursor?: Prisma.DetallePedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetallePedidoScalarFieldEnum | Prisma.DetallePedidoScalarFieldEnum[];
};
/**
 * Pedido without action
 */
export type PedidoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Pedido.d.ts.map