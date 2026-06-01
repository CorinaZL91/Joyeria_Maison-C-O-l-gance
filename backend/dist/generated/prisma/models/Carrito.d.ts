import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Carrito
 *
 */
export type CarritoModel = runtime.Types.Result.DefaultSelection<Prisma.$CarritoPayload>;
export type AggregateCarrito = {
    _count: CarritoCountAggregateOutputType | null;
    _avg: CarritoAvgAggregateOutputType | null;
    _sum: CarritoSumAggregateOutputType | null;
    _min: CarritoMinAggregateOutputType | null;
    _max: CarritoMaxAggregateOutputType | null;
};
export type CarritoAvgAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
    producto_id: number | null;
    producto_talla_id: number | null;
    cantidad: number | null;
};
export type CarritoSumAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
    producto_id: number | null;
    producto_talla_id: number | null;
    cantidad: number | null;
};
export type CarritoMinAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
    producto_id: number | null;
    producto_talla_id: number | null;
    cantidad: number | null;
    fecha_agregado: Date | null;
};
export type CarritoMaxAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
    producto_id: number | null;
    producto_talla_id: number | null;
    cantidad: number | null;
    fecha_agregado: Date | null;
};
export type CarritoCountAggregateOutputType = {
    id: number;
    usuario_id: number;
    producto_id: number;
    producto_talla_id: number;
    cantidad: number;
    fecha_agregado: number;
    _all: number;
};
export type CarritoAvgAggregateInputType = {
    id?: true;
    usuario_id?: true;
    producto_id?: true;
    producto_talla_id?: true;
    cantidad?: true;
};
export type CarritoSumAggregateInputType = {
    id?: true;
    usuario_id?: true;
    producto_id?: true;
    producto_talla_id?: true;
    cantidad?: true;
};
export type CarritoMinAggregateInputType = {
    id?: true;
    usuario_id?: true;
    producto_id?: true;
    producto_talla_id?: true;
    cantidad?: true;
    fecha_agregado?: true;
};
export type CarritoMaxAggregateInputType = {
    id?: true;
    usuario_id?: true;
    producto_id?: true;
    producto_talla_id?: true;
    cantidad?: true;
    fecha_agregado?: true;
};
export type CarritoCountAggregateInputType = {
    id?: true;
    usuario_id?: true;
    producto_id?: true;
    producto_talla_id?: true;
    cantidad?: true;
    fecha_agregado?: true;
    _all?: true;
};
export type CarritoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Carrito to aggregate.
     */
    where?: Prisma.CarritoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carritos to fetch.
     */
    orderBy?: Prisma.CarritoOrderByWithRelationInput | Prisma.CarritoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CarritoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carritos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Carritos
    **/
    _count?: true | CarritoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CarritoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CarritoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CarritoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CarritoMaxAggregateInputType;
};
export type GetCarritoAggregateType<T extends CarritoAggregateArgs> = {
    [P in keyof T & keyof AggregateCarrito]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCarrito[P]> : Prisma.GetScalarType<T[P], AggregateCarrito[P]>;
};
export type CarritoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarritoWhereInput;
    orderBy?: Prisma.CarritoOrderByWithAggregationInput | Prisma.CarritoOrderByWithAggregationInput[];
    by: Prisma.CarritoScalarFieldEnum[] | Prisma.CarritoScalarFieldEnum;
    having?: Prisma.CarritoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarritoCountAggregateInputType | true;
    _avg?: CarritoAvgAggregateInputType;
    _sum?: CarritoSumAggregateInputType;
    _min?: CarritoMinAggregateInputType;
    _max?: CarritoMaxAggregateInputType;
};
export type CarritoGroupByOutputType = {
    id: number;
    usuario_id: number;
    producto_id: number;
    producto_talla_id: number | null;
    cantidad: number;
    fecha_agregado: Date;
    _count: CarritoCountAggregateOutputType | null;
    _avg: CarritoAvgAggregateOutputType | null;
    _sum: CarritoSumAggregateOutputType | null;
    _min: CarritoMinAggregateOutputType | null;
    _max: CarritoMaxAggregateOutputType | null;
};
type GetCarritoGroupByPayload<T extends CarritoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CarritoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CarritoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CarritoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CarritoGroupByOutputType[P]>;
}>>;
export type CarritoWhereInput = {
    AND?: Prisma.CarritoWhereInput | Prisma.CarritoWhereInput[];
    OR?: Prisma.CarritoWhereInput[];
    NOT?: Prisma.CarritoWhereInput | Prisma.CarritoWhereInput[];
    id?: Prisma.IntFilter<"Carrito"> | number;
    usuario_id?: Prisma.IntFilter<"Carrito"> | number;
    producto_id?: Prisma.IntFilter<"Carrito"> | number;
    producto_talla_id?: Prisma.IntNullableFilter<"Carrito"> | number | null;
    cantidad?: Prisma.IntFilter<"Carrito"> | number;
    fecha_agregado?: Prisma.DateTimeFilter<"Carrito"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
    productoTalla?: Prisma.XOR<Prisma.ProductoTallaNullableScalarRelationFilter, Prisma.ProductoTallaWhereInput> | null;
};
export type CarritoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
    producto_talla_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha_agregado?: Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
    producto?: Prisma.ProductoOrderByWithRelationInput;
    productoTalla?: Prisma.ProductoTallaOrderByWithRelationInput;
};
export type CarritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    usuario_id_producto_id_producto_talla_id?: Prisma.CarritoUsuario_idProducto_idProducto_talla_idCompoundUniqueInput;
    AND?: Prisma.CarritoWhereInput | Prisma.CarritoWhereInput[];
    OR?: Prisma.CarritoWhereInput[];
    NOT?: Prisma.CarritoWhereInput | Prisma.CarritoWhereInput[];
    usuario_id?: Prisma.IntFilter<"Carrito"> | number;
    producto_id?: Prisma.IntFilter<"Carrito"> | number;
    producto_talla_id?: Prisma.IntNullableFilter<"Carrito"> | number | null;
    cantidad?: Prisma.IntFilter<"Carrito"> | number;
    fecha_agregado?: Prisma.DateTimeFilter<"Carrito"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
    productoTalla?: Prisma.XOR<Prisma.ProductoTallaNullableScalarRelationFilter, Prisma.ProductoTallaWhereInput> | null;
}, "id" | "usuario_id_producto_id_producto_talla_id">;
export type CarritoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
    producto_talla_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha_agregado?: Prisma.SortOrder;
    _count?: Prisma.CarritoCountOrderByAggregateInput;
    _avg?: Prisma.CarritoAvgOrderByAggregateInput;
    _max?: Prisma.CarritoMaxOrderByAggregateInput;
    _min?: Prisma.CarritoMinOrderByAggregateInput;
    _sum?: Prisma.CarritoSumOrderByAggregateInput;
};
export type CarritoScalarWhereWithAggregatesInput = {
    AND?: Prisma.CarritoScalarWhereWithAggregatesInput | Prisma.CarritoScalarWhereWithAggregatesInput[];
    OR?: Prisma.CarritoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CarritoScalarWhereWithAggregatesInput | Prisma.CarritoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Carrito"> | number;
    usuario_id?: Prisma.IntWithAggregatesFilter<"Carrito"> | number;
    producto_id?: Prisma.IntWithAggregatesFilter<"Carrito"> | number;
    producto_talla_id?: Prisma.IntNullableWithAggregatesFilter<"Carrito"> | number | null;
    cantidad?: Prisma.IntWithAggregatesFilter<"Carrito"> | number;
    fecha_agregado?: Prisma.DateTimeWithAggregatesFilter<"Carrito"> | Date | string;
};
export type CarritoCreateInput = {
    cantidad?: number;
    fecha_agregado?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutCarritoInput;
    producto: Prisma.ProductoCreateNestedOneWithoutCarritoInput;
    productoTalla?: Prisma.ProductoTallaCreateNestedOneWithoutCarritoInput;
};
export type CarritoUncheckedCreateInput = {
    id?: number;
    usuario_id: number;
    producto_id: number;
    producto_talla_id?: number | null;
    cantidad?: number;
    fecha_agregado?: Date | string;
};
export type CarritoUpdateInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutCarritoNestedInput;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutCarritoNestedInput;
    productoTalla?: Prisma.ProductoTallaUpdateOneWithoutCarritoNestedInput;
};
export type CarritoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    producto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    producto_talla_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoCreateManyInput = {
    id?: number;
    usuario_id: number;
    producto_id: number;
    producto_talla_id?: number | null;
    cantidad?: number;
    fecha_agregado?: Date | string;
};
export type CarritoUpdateManyMutationInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    producto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    producto_talla_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoListRelationFilter = {
    every?: Prisma.CarritoWhereInput;
    some?: Prisma.CarritoWhereInput;
    none?: Prisma.CarritoWhereInput;
};
export type CarritoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CarritoUsuario_idProducto_idProducto_talla_idCompoundUniqueInput = {
    usuario_id: number;
    producto_id: number;
    producto_talla_id: number;
};
export type CarritoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
    producto_talla_id?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha_agregado?: Prisma.SortOrder;
};
export type CarritoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
    producto_talla_id?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type CarritoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
    producto_talla_id?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha_agregado?: Prisma.SortOrder;
};
export type CarritoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
    producto_talla_id?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha_agregado?: Prisma.SortOrder;
};
export type CarritoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
    producto_talla_id?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type CarritoCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutUsuarioInput, Prisma.CarritoUncheckedCreateWithoutUsuarioInput> | Prisma.CarritoCreateWithoutUsuarioInput[] | Prisma.CarritoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutUsuarioInput | Prisma.CarritoCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.CarritoCreateManyUsuarioInputEnvelope;
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
};
export type CarritoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutUsuarioInput, Prisma.CarritoUncheckedCreateWithoutUsuarioInput> | Prisma.CarritoCreateWithoutUsuarioInput[] | Prisma.CarritoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutUsuarioInput | Prisma.CarritoCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.CarritoCreateManyUsuarioInputEnvelope;
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
};
export type CarritoUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutUsuarioInput, Prisma.CarritoUncheckedCreateWithoutUsuarioInput> | Prisma.CarritoCreateWithoutUsuarioInput[] | Prisma.CarritoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutUsuarioInput | Prisma.CarritoCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.CarritoUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.CarritoUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.CarritoCreateManyUsuarioInputEnvelope;
    set?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    disconnect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    delete?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    update?: Prisma.CarritoUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.CarritoUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.CarritoUpdateManyWithWhereWithoutUsuarioInput | Prisma.CarritoUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.CarritoScalarWhereInput | Prisma.CarritoScalarWhereInput[];
};
export type CarritoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutUsuarioInput, Prisma.CarritoUncheckedCreateWithoutUsuarioInput> | Prisma.CarritoCreateWithoutUsuarioInput[] | Prisma.CarritoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutUsuarioInput | Prisma.CarritoCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.CarritoUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.CarritoUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.CarritoCreateManyUsuarioInputEnvelope;
    set?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    disconnect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    delete?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    update?: Prisma.CarritoUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.CarritoUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.CarritoUpdateManyWithWhereWithoutUsuarioInput | Prisma.CarritoUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.CarritoScalarWhereInput | Prisma.CarritoScalarWhereInput[];
};
export type CarritoCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutProductoInput, Prisma.CarritoUncheckedCreateWithoutProductoInput> | Prisma.CarritoCreateWithoutProductoInput[] | Prisma.CarritoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutProductoInput | Prisma.CarritoCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.CarritoCreateManyProductoInputEnvelope;
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
};
export type CarritoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutProductoInput, Prisma.CarritoUncheckedCreateWithoutProductoInput> | Prisma.CarritoCreateWithoutProductoInput[] | Prisma.CarritoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutProductoInput | Prisma.CarritoCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.CarritoCreateManyProductoInputEnvelope;
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
};
export type CarritoUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutProductoInput, Prisma.CarritoUncheckedCreateWithoutProductoInput> | Prisma.CarritoCreateWithoutProductoInput[] | Prisma.CarritoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutProductoInput | Prisma.CarritoCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.CarritoUpsertWithWhereUniqueWithoutProductoInput | Prisma.CarritoUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.CarritoCreateManyProductoInputEnvelope;
    set?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    disconnect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    delete?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    update?: Prisma.CarritoUpdateWithWhereUniqueWithoutProductoInput | Prisma.CarritoUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.CarritoUpdateManyWithWhereWithoutProductoInput | Prisma.CarritoUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.CarritoScalarWhereInput | Prisma.CarritoScalarWhereInput[];
};
export type CarritoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutProductoInput, Prisma.CarritoUncheckedCreateWithoutProductoInput> | Prisma.CarritoCreateWithoutProductoInput[] | Prisma.CarritoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutProductoInput | Prisma.CarritoCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.CarritoUpsertWithWhereUniqueWithoutProductoInput | Prisma.CarritoUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.CarritoCreateManyProductoInputEnvelope;
    set?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    disconnect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    delete?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    update?: Prisma.CarritoUpdateWithWhereUniqueWithoutProductoInput | Prisma.CarritoUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.CarritoUpdateManyWithWhereWithoutProductoInput | Prisma.CarritoUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.CarritoScalarWhereInput | Prisma.CarritoScalarWhereInput[];
};
export type CarritoCreateNestedManyWithoutProductoTallaInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutProductoTallaInput, Prisma.CarritoUncheckedCreateWithoutProductoTallaInput> | Prisma.CarritoCreateWithoutProductoTallaInput[] | Prisma.CarritoUncheckedCreateWithoutProductoTallaInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutProductoTallaInput | Prisma.CarritoCreateOrConnectWithoutProductoTallaInput[];
    createMany?: Prisma.CarritoCreateManyProductoTallaInputEnvelope;
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
};
export type CarritoUncheckedCreateNestedManyWithoutProductoTallaInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutProductoTallaInput, Prisma.CarritoUncheckedCreateWithoutProductoTallaInput> | Prisma.CarritoCreateWithoutProductoTallaInput[] | Prisma.CarritoUncheckedCreateWithoutProductoTallaInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutProductoTallaInput | Prisma.CarritoCreateOrConnectWithoutProductoTallaInput[];
    createMany?: Prisma.CarritoCreateManyProductoTallaInputEnvelope;
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
};
export type CarritoUpdateManyWithoutProductoTallaNestedInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutProductoTallaInput, Prisma.CarritoUncheckedCreateWithoutProductoTallaInput> | Prisma.CarritoCreateWithoutProductoTallaInput[] | Prisma.CarritoUncheckedCreateWithoutProductoTallaInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutProductoTallaInput | Prisma.CarritoCreateOrConnectWithoutProductoTallaInput[];
    upsert?: Prisma.CarritoUpsertWithWhereUniqueWithoutProductoTallaInput | Prisma.CarritoUpsertWithWhereUniqueWithoutProductoTallaInput[];
    createMany?: Prisma.CarritoCreateManyProductoTallaInputEnvelope;
    set?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    disconnect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    delete?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    update?: Prisma.CarritoUpdateWithWhereUniqueWithoutProductoTallaInput | Prisma.CarritoUpdateWithWhereUniqueWithoutProductoTallaInput[];
    updateMany?: Prisma.CarritoUpdateManyWithWhereWithoutProductoTallaInput | Prisma.CarritoUpdateManyWithWhereWithoutProductoTallaInput[];
    deleteMany?: Prisma.CarritoScalarWhereInput | Prisma.CarritoScalarWhereInput[];
};
export type CarritoUncheckedUpdateManyWithoutProductoTallaNestedInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutProductoTallaInput, Prisma.CarritoUncheckedCreateWithoutProductoTallaInput> | Prisma.CarritoCreateWithoutProductoTallaInput[] | Prisma.CarritoUncheckedCreateWithoutProductoTallaInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutProductoTallaInput | Prisma.CarritoCreateOrConnectWithoutProductoTallaInput[];
    upsert?: Prisma.CarritoUpsertWithWhereUniqueWithoutProductoTallaInput | Prisma.CarritoUpsertWithWhereUniqueWithoutProductoTallaInput[];
    createMany?: Prisma.CarritoCreateManyProductoTallaInputEnvelope;
    set?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    disconnect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    delete?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    update?: Prisma.CarritoUpdateWithWhereUniqueWithoutProductoTallaInput | Prisma.CarritoUpdateWithWhereUniqueWithoutProductoTallaInput[];
    updateMany?: Prisma.CarritoUpdateManyWithWhereWithoutProductoTallaInput | Prisma.CarritoUpdateManyWithWhereWithoutProductoTallaInput[];
    deleteMany?: Prisma.CarritoScalarWhereInput | Prisma.CarritoScalarWhereInput[];
};
export type CarritoCreateWithoutUsuarioInput = {
    cantidad?: number;
    fecha_agregado?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutCarritoInput;
    productoTalla?: Prisma.ProductoTallaCreateNestedOneWithoutCarritoInput;
};
export type CarritoUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    producto_id: number;
    producto_talla_id?: number | null;
    cantidad?: number;
    fecha_agregado?: Date | string;
};
export type CarritoCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.CarritoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarritoCreateWithoutUsuarioInput, Prisma.CarritoUncheckedCreateWithoutUsuarioInput>;
};
export type CarritoCreateManyUsuarioInputEnvelope = {
    data: Prisma.CarritoCreateManyUsuarioInput | Prisma.CarritoCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type CarritoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.CarritoWhereUniqueInput;
    update: Prisma.XOR<Prisma.CarritoUpdateWithoutUsuarioInput, Prisma.CarritoUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.CarritoCreateWithoutUsuarioInput, Prisma.CarritoUncheckedCreateWithoutUsuarioInput>;
};
export type CarritoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.CarritoWhereUniqueInput;
    data: Prisma.XOR<Prisma.CarritoUpdateWithoutUsuarioInput, Prisma.CarritoUncheckedUpdateWithoutUsuarioInput>;
};
export type CarritoUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.CarritoScalarWhereInput;
    data: Prisma.XOR<Prisma.CarritoUpdateManyMutationInput, Prisma.CarritoUncheckedUpdateManyWithoutUsuarioInput>;
};
export type CarritoScalarWhereInput = {
    AND?: Prisma.CarritoScalarWhereInput | Prisma.CarritoScalarWhereInput[];
    OR?: Prisma.CarritoScalarWhereInput[];
    NOT?: Prisma.CarritoScalarWhereInput | Prisma.CarritoScalarWhereInput[];
    id?: Prisma.IntFilter<"Carrito"> | number;
    usuario_id?: Prisma.IntFilter<"Carrito"> | number;
    producto_id?: Prisma.IntFilter<"Carrito"> | number;
    producto_talla_id?: Prisma.IntNullableFilter<"Carrito"> | number | null;
    cantidad?: Prisma.IntFilter<"Carrito"> | number;
    fecha_agregado?: Prisma.DateTimeFilter<"Carrito"> | Date | string;
};
export type CarritoCreateWithoutProductoInput = {
    cantidad?: number;
    fecha_agregado?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutCarritoInput;
    productoTalla?: Prisma.ProductoTallaCreateNestedOneWithoutCarritoInput;
};
export type CarritoUncheckedCreateWithoutProductoInput = {
    id?: number;
    usuario_id: number;
    producto_talla_id?: number | null;
    cantidad?: number;
    fecha_agregado?: Date | string;
};
export type CarritoCreateOrConnectWithoutProductoInput = {
    where: Prisma.CarritoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarritoCreateWithoutProductoInput, Prisma.CarritoUncheckedCreateWithoutProductoInput>;
};
export type CarritoCreateManyProductoInputEnvelope = {
    data: Prisma.CarritoCreateManyProductoInput | Prisma.CarritoCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type CarritoUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.CarritoWhereUniqueInput;
    update: Prisma.XOR<Prisma.CarritoUpdateWithoutProductoInput, Prisma.CarritoUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.CarritoCreateWithoutProductoInput, Prisma.CarritoUncheckedCreateWithoutProductoInput>;
};
export type CarritoUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.CarritoWhereUniqueInput;
    data: Prisma.XOR<Prisma.CarritoUpdateWithoutProductoInput, Prisma.CarritoUncheckedUpdateWithoutProductoInput>;
};
export type CarritoUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.CarritoScalarWhereInput;
    data: Prisma.XOR<Prisma.CarritoUpdateManyMutationInput, Prisma.CarritoUncheckedUpdateManyWithoutProductoInput>;
};
export type CarritoCreateWithoutProductoTallaInput = {
    cantidad?: number;
    fecha_agregado?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutCarritoInput;
    producto: Prisma.ProductoCreateNestedOneWithoutCarritoInput;
};
export type CarritoUncheckedCreateWithoutProductoTallaInput = {
    id?: number;
    usuario_id: number;
    producto_id: number;
    cantidad?: number;
    fecha_agregado?: Date | string;
};
export type CarritoCreateOrConnectWithoutProductoTallaInput = {
    where: Prisma.CarritoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarritoCreateWithoutProductoTallaInput, Prisma.CarritoUncheckedCreateWithoutProductoTallaInput>;
};
export type CarritoCreateManyProductoTallaInputEnvelope = {
    data: Prisma.CarritoCreateManyProductoTallaInput | Prisma.CarritoCreateManyProductoTallaInput[];
    skipDuplicates?: boolean;
};
export type CarritoUpsertWithWhereUniqueWithoutProductoTallaInput = {
    where: Prisma.CarritoWhereUniqueInput;
    update: Prisma.XOR<Prisma.CarritoUpdateWithoutProductoTallaInput, Prisma.CarritoUncheckedUpdateWithoutProductoTallaInput>;
    create: Prisma.XOR<Prisma.CarritoCreateWithoutProductoTallaInput, Prisma.CarritoUncheckedCreateWithoutProductoTallaInput>;
};
export type CarritoUpdateWithWhereUniqueWithoutProductoTallaInput = {
    where: Prisma.CarritoWhereUniqueInput;
    data: Prisma.XOR<Prisma.CarritoUpdateWithoutProductoTallaInput, Prisma.CarritoUncheckedUpdateWithoutProductoTallaInput>;
};
export type CarritoUpdateManyWithWhereWithoutProductoTallaInput = {
    where: Prisma.CarritoScalarWhereInput;
    data: Prisma.XOR<Prisma.CarritoUpdateManyMutationInput, Prisma.CarritoUncheckedUpdateManyWithoutProductoTallaInput>;
};
export type CarritoCreateManyUsuarioInput = {
    id?: number;
    producto_id: number;
    producto_talla_id?: number | null;
    cantidad?: number;
    fecha_agregado?: Date | string;
};
export type CarritoUpdateWithoutUsuarioInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutCarritoNestedInput;
    productoTalla?: Prisma.ProductoTallaUpdateOneWithoutCarritoNestedInput;
};
export type CarritoUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    producto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    producto_talla_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    producto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    producto_talla_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoCreateManyProductoInput = {
    id?: number;
    usuario_id: number;
    producto_talla_id?: number | null;
    cantidad?: number;
    fecha_agregado?: Date | string;
};
export type CarritoUpdateWithoutProductoInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutCarritoNestedInput;
    productoTalla?: Prisma.ProductoTallaUpdateOneWithoutCarritoNestedInput;
};
export type CarritoUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    producto_talla_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoUncheckedUpdateManyWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    producto_talla_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoCreateManyProductoTallaInput = {
    id?: number;
    usuario_id: number;
    producto_id: number;
    cantidad?: number;
    fecha_agregado?: Date | string;
};
export type CarritoUpdateWithoutProductoTallaInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutCarritoNestedInput;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutCarritoNestedInput;
};
export type CarritoUncheckedUpdateWithoutProductoTallaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    producto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoUncheckedUpdateManyWithoutProductoTallaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    producto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_agregado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    producto_id?: boolean;
    producto_talla_id?: boolean;
    cantidad?: boolean;
    fecha_agregado?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    productoTalla?: boolean | Prisma.Carrito$productoTallaArgs<ExtArgs>;
}, ExtArgs["result"]["carrito"]>;
export type CarritoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    producto_id?: boolean;
    producto_talla_id?: boolean;
    cantidad?: boolean;
    fecha_agregado?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    productoTalla?: boolean | Prisma.Carrito$productoTallaArgs<ExtArgs>;
}, ExtArgs["result"]["carrito"]>;
export type CarritoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    producto_id?: boolean;
    producto_talla_id?: boolean;
    cantidad?: boolean;
    fecha_agregado?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    productoTalla?: boolean | Prisma.Carrito$productoTallaArgs<ExtArgs>;
}, ExtArgs["result"]["carrito"]>;
export type CarritoSelectScalar = {
    id?: boolean;
    usuario_id?: boolean;
    producto_id?: boolean;
    producto_talla_id?: boolean;
    cantidad?: boolean;
    fecha_agregado?: boolean;
};
export type CarritoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuario_id" | "producto_id" | "producto_talla_id" | "cantidad" | "fecha_agregado", ExtArgs["result"]["carrito"]>;
export type CarritoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    productoTalla?: boolean | Prisma.Carrito$productoTallaArgs<ExtArgs>;
};
export type CarritoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    productoTalla?: boolean | Prisma.Carrito$productoTallaArgs<ExtArgs>;
};
export type CarritoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    productoTalla?: boolean | Prisma.Carrito$productoTallaArgs<ExtArgs>;
};
export type $CarritoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Carrito";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
        producto: Prisma.$ProductoPayload<ExtArgs>;
        productoTalla: Prisma.$ProductoTallaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        usuario_id: number;
        producto_id: number;
        producto_talla_id: number | null;
        cantidad: number;
        fecha_agregado: Date;
    }, ExtArgs["result"]["carrito"]>;
    composites: {};
};
export type CarritoGetPayload<S extends boolean | null | undefined | CarritoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CarritoPayload, S>;
export type CarritoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CarritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CarritoCountAggregateInputType | true;
};
export interface CarritoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Carrito'];
        meta: {
            name: 'Carrito';
        };
    };
    /**
     * Find zero or one Carrito that matches the filter.
     * @param {CarritoFindUniqueArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarritoFindUniqueArgs>(args: Prisma.SelectSubset<T, CarritoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Carrito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarritoFindUniqueOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarritoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CarritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Carrito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindFirstArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarritoFindFirstArgs>(args?: Prisma.SelectSubset<T, CarritoFindFirstArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Carrito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindFirstOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarritoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CarritoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Carritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carritos
     * const carritos = await prisma.carrito.findMany()
     *
     * // Get first 10 Carritos
     * const carritos = await prisma.carrito.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const carritoWithIdOnly = await prisma.carrito.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CarritoFindManyArgs>(args?: Prisma.SelectSubset<T, CarritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Carrito.
     * @param {CarritoCreateArgs} args - Arguments to create a Carrito.
     * @example
     * // Create one Carrito
     * const Carrito = await prisma.carrito.create({
     *   data: {
     *     // ... data to create a Carrito
     *   }
     * })
     *
     */
    create<T extends CarritoCreateArgs>(args: Prisma.SelectSubset<T, CarritoCreateArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Carritos.
     * @param {CarritoCreateManyArgs} args - Arguments to create many Carritos.
     * @example
     * // Create many Carritos
     * const carrito = await prisma.carrito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CarritoCreateManyArgs>(args?: Prisma.SelectSubset<T, CarritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Carritos and returns the data saved in the database.
     * @param {CarritoCreateManyAndReturnArgs} args - Arguments to create many Carritos.
     * @example
     * // Create many Carritos
     * const carrito = await prisma.carrito.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Carritos and only return the `id`
     * const carritoWithIdOnly = await prisma.carrito.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CarritoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CarritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Carrito.
     * @param {CarritoDeleteArgs} args - Arguments to delete one Carrito.
     * @example
     * // Delete one Carrito
     * const Carrito = await prisma.carrito.delete({
     *   where: {
     *     // ... filter to delete one Carrito
     *   }
     * })
     *
     */
    delete<T extends CarritoDeleteArgs>(args: Prisma.SelectSubset<T, CarritoDeleteArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Carrito.
     * @param {CarritoUpdateArgs} args - Arguments to update one Carrito.
     * @example
     * // Update one Carrito
     * const carrito = await prisma.carrito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CarritoUpdateArgs>(args: Prisma.SelectSubset<T, CarritoUpdateArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Carritos.
     * @param {CarritoDeleteManyArgs} args - Arguments to filter Carritos to delete.
     * @example
     * // Delete a few Carritos
     * const { count } = await prisma.carrito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CarritoDeleteManyArgs>(args?: Prisma.SelectSubset<T, CarritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carritos
     * const carrito = await prisma.carrito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CarritoUpdateManyArgs>(args: Prisma.SelectSubset<T, CarritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Carritos and returns the data updated in the database.
     * @param {CarritoUpdateManyAndReturnArgs} args - Arguments to update many Carritos.
     * @example
     * // Update many Carritos
     * const carrito = await prisma.carrito.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Carritos and only return the `id`
     * const carritoWithIdOnly = await prisma.carrito.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarritoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CarritoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Carrito.
     * @param {CarritoUpsertArgs} args - Arguments to update or create a Carrito.
     * @example
     * // Update or create a Carrito
     * const carrito = await prisma.carrito.upsert({
     *   create: {
     *     // ... data to create a Carrito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrito we want to update
     *   }
     * })
     */
    upsert<T extends CarritoUpsertArgs>(args: Prisma.SelectSubset<T, CarritoUpsertArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoCountArgs} args - Arguments to filter Carritos to count.
     * @example
     * // Count the number of Carritos
     * const count = await prisma.carrito.count({
     *   where: {
     *     // ... the filter for the Carritos we want to count
     *   }
     * })
    **/
    count<T extends CarritoCountArgs>(args?: Prisma.Subset<T, CarritoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CarritoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarritoAggregateArgs>(args: Prisma.Subset<T, CarritoAggregateArgs>): Prisma.PrismaPromise<GetCarritoAggregateType<T>>;
    /**
     * Group by Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CarritoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CarritoGroupByArgs['orderBy'];
    } : {
        orderBy?: CarritoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CarritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Carrito model
     */
    readonly fields: CarritoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Carrito.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CarritoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    producto<T extends Prisma.ProductoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductoDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    productoTalla<T extends Prisma.Carrito$productoTallaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Carrito$productoTallaArgs<ExtArgs>>): Prisma.Prisma__ProductoTallaClient<runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Carrito model
 */
export interface CarritoFieldRefs {
    readonly id: Prisma.FieldRef<"Carrito", 'Int'>;
    readonly usuario_id: Prisma.FieldRef<"Carrito", 'Int'>;
    readonly producto_id: Prisma.FieldRef<"Carrito", 'Int'>;
    readonly producto_talla_id: Prisma.FieldRef<"Carrito", 'Int'>;
    readonly cantidad: Prisma.FieldRef<"Carrito", 'Int'>;
    readonly fecha_agregado: Prisma.FieldRef<"Carrito", 'DateTime'>;
}
/**
 * Carrito findUnique
 */
export type CarritoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    /**
     * Filter, which Carrito to fetch.
     */
    where: Prisma.CarritoWhereUniqueInput;
};
/**
 * Carrito findUniqueOrThrow
 */
export type CarritoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    /**
     * Filter, which Carrito to fetch.
     */
    where: Prisma.CarritoWhereUniqueInput;
};
/**
 * Carrito findFirst
 */
export type CarritoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    /**
     * Filter, which Carrito to fetch.
     */
    where?: Prisma.CarritoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carritos to fetch.
     */
    orderBy?: Prisma.CarritoOrderByWithRelationInput | Prisma.CarritoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Carritos.
     */
    cursor?: Prisma.CarritoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carritos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Carritos.
     */
    distinct?: Prisma.CarritoScalarFieldEnum | Prisma.CarritoScalarFieldEnum[];
};
/**
 * Carrito findFirstOrThrow
 */
export type CarritoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    /**
     * Filter, which Carrito to fetch.
     */
    where?: Prisma.CarritoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carritos to fetch.
     */
    orderBy?: Prisma.CarritoOrderByWithRelationInput | Prisma.CarritoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Carritos.
     */
    cursor?: Prisma.CarritoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carritos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Carritos.
     */
    distinct?: Prisma.CarritoScalarFieldEnum | Prisma.CarritoScalarFieldEnum[];
};
/**
 * Carrito findMany
 */
export type CarritoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    /**
     * Filter, which Carritos to fetch.
     */
    where?: Prisma.CarritoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carritos to fetch.
     */
    orderBy?: Prisma.CarritoOrderByWithRelationInput | Prisma.CarritoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Carritos.
     */
    cursor?: Prisma.CarritoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carritos.
     */
    skip?: number;
    distinct?: Prisma.CarritoScalarFieldEnum | Prisma.CarritoScalarFieldEnum[];
};
/**
 * Carrito create
 */
export type CarritoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    /**
     * The data needed to create a Carrito.
     */
    data: Prisma.XOR<Prisma.CarritoCreateInput, Prisma.CarritoUncheckedCreateInput>;
};
/**
 * Carrito createMany
 */
export type CarritoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carritos.
     */
    data: Prisma.CarritoCreateManyInput | Prisma.CarritoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Carrito createManyAndReturn
 */
export type CarritoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * The data used to create many Carritos.
     */
    data: Prisma.CarritoCreateManyInput | Prisma.CarritoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Carrito update
 */
export type CarritoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    /**
     * The data needed to update a Carrito.
     */
    data: Prisma.XOR<Prisma.CarritoUpdateInput, Prisma.CarritoUncheckedUpdateInput>;
    /**
     * Choose, which Carrito to update.
     */
    where: Prisma.CarritoWhereUniqueInput;
};
/**
 * Carrito updateMany
 */
export type CarritoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Carritos.
     */
    data: Prisma.XOR<Prisma.CarritoUpdateManyMutationInput, Prisma.CarritoUncheckedUpdateManyInput>;
    /**
     * Filter which Carritos to update
     */
    where?: Prisma.CarritoWhereInput;
    /**
     * Limit how many Carritos to update.
     */
    limit?: number;
};
/**
 * Carrito updateManyAndReturn
 */
export type CarritoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * The data used to update Carritos.
     */
    data: Prisma.XOR<Prisma.CarritoUpdateManyMutationInput, Prisma.CarritoUncheckedUpdateManyInput>;
    /**
     * Filter which Carritos to update
     */
    where?: Prisma.CarritoWhereInput;
    /**
     * Limit how many Carritos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Carrito upsert
 */
export type CarritoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    /**
     * The filter to search for the Carrito to update in case it exists.
     */
    where: Prisma.CarritoWhereUniqueInput;
    /**
     * In case the Carrito found by the `where` argument doesn't exist, create a new Carrito with this data.
     */
    create: Prisma.XOR<Prisma.CarritoCreateInput, Prisma.CarritoUncheckedCreateInput>;
    /**
     * In case the Carrito was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CarritoUpdateInput, Prisma.CarritoUncheckedUpdateInput>;
};
/**
 * Carrito delete
 */
export type CarritoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    /**
     * Filter which Carrito to delete.
     */
    where: Prisma.CarritoWhereUniqueInput;
};
/**
 * Carrito deleteMany
 */
export type CarritoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Carritos to delete
     */
    where?: Prisma.CarritoWhereInput;
    /**
     * Limit how many Carritos to delete.
     */
    limit?: number;
};
/**
 * Carrito.productoTalla
 */
export type Carrito$productoTallaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaInclude<ExtArgs> | null;
    where?: Prisma.ProductoTallaWhereInput;
};
/**
 * Carrito without action
 */
export type CarritoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Carrito.d.ts.map