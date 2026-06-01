import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Productos
 *
 */
export type ProductosModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductosPayload>;
export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null;
    _avg: ProductosAvgAggregateOutputType | null;
    _sum: ProductosSumAggregateOutputType | null;
    _min: ProductosMinAggregateOutputType | null;
    _max: ProductosMaxAggregateOutputType | null;
};
export type ProductosAvgAggregateOutputType = {
    id_producto: number | null;
    id_categoria: number | null;
    precio: runtime.Decimal | null;
    stock: number | null;
};
export type ProductosSumAggregateOutputType = {
    id_producto: number | null;
    id_categoria: number | null;
    precio: runtime.Decimal | null;
    stock: number | null;
};
export type ProductosMinAggregateOutputType = {
    id_producto: number | null;
    id_categoria: number | null;
    nombre: string | null;
    descripcion: string | null;
    precio: runtime.Decimal | null;
    material: $Enums.Materiales | null;
    stock: number | null;
    imagen_url: string | null;
};
export type ProductosMaxAggregateOutputType = {
    id_producto: number | null;
    id_categoria: number | null;
    nombre: string | null;
    descripcion: string | null;
    precio: runtime.Decimal | null;
    material: $Enums.Materiales | null;
    stock: number | null;
    imagen_url: string | null;
};
export type ProductosCountAggregateOutputType = {
    id_producto: number;
    id_categoria: number;
    nombre: number;
    descripcion: number;
    precio: number;
    material: number;
    stock: number;
    imagen_url: number;
    _all: number;
};
export type ProductosAvgAggregateInputType = {
    id_producto?: true;
    id_categoria?: true;
    precio?: true;
    stock?: true;
};
export type ProductosSumAggregateInputType = {
    id_producto?: true;
    id_categoria?: true;
    precio?: true;
    stock?: true;
};
export type ProductosMinAggregateInputType = {
    id_producto?: true;
    id_categoria?: true;
    nombre?: true;
    descripcion?: true;
    precio?: true;
    material?: true;
    stock?: true;
    imagen_url?: true;
};
export type ProductosMaxAggregateInputType = {
    id_producto?: true;
    id_categoria?: true;
    nombre?: true;
    descripcion?: true;
    precio?: true;
    material?: true;
    stock?: true;
    imagen_url?: true;
};
export type ProductosCountAggregateInputType = {
    id_producto?: true;
    id_categoria?: true;
    nombre?: true;
    descripcion?: true;
    precio?: true;
    material?: true;
    stock?: true;
    imagen_url?: true;
    _all?: true;
};
export type ProductosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to aggregate.
     */
    where?: Prisma.ProductosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Productos to fetch.
     */
    orderBy?: Prisma.ProductosOrderByWithRelationInput | Prisma.ProductosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProductosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Productos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Productos
    **/
    _count?: true | ProductosCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType;
};
export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
    [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductos[P]> : Prisma.GetScalarType<T[P], AggregateProductos[P]>;
};
export type ProductosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductosWhereInput;
    orderBy?: Prisma.ProductosOrderByWithAggregationInput | Prisma.ProductosOrderByWithAggregationInput[];
    by: Prisma.ProductosScalarFieldEnum[] | Prisma.ProductosScalarFieldEnum;
    having?: Prisma.ProductosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductosCountAggregateInputType | true;
    _avg?: ProductosAvgAggregateInputType;
    _sum?: ProductosSumAggregateInputType;
    _min?: ProductosMinAggregateInputType;
    _max?: ProductosMaxAggregateInputType;
};
export type ProductosGroupByOutputType = {
    id_producto: number;
    id_categoria: number;
    nombre: string;
    descripcion: string | null;
    precio: runtime.Decimal;
    material: $Enums.Materiales;
    stock: number;
    imagen_url: string | null;
    _count: ProductosCountAggregateOutputType | null;
    _avg: ProductosAvgAggregateOutputType | null;
    _sum: ProductosSumAggregateOutputType | null;
    _min: ProductosMinAggregateOutputType | null;
    _max: ProductosMaxAggregateOutputType | null;
};
type GetProductosGroupByPayload<T extends ProductosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductosGroupByOutputType[P]>;
}>>;
export type ProductosWhereInput = {
    AND?: Prisma.ProductosWhereInput | Prisma.ProductosWhereInput[];
    OR?: Prisma.ProductosWhereInput[];
    NOT?: Prisma.ProductosWhereInput | Prisma.ProductosWhereInput[];
    id_producto?: Prisma.IntFilter<"Productos"> | number;
    id_categoria?: Prisma.IntFilter<"Productos"> | number;
    nombre?: Prisma.StringFilter<"Productos"> | string;
    descripcion?: Prisma.StringNullableFilter<"Productos"> | string | null;
    precio?: Prisma.DecimalFilter<"Productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFilter<"Productos"> | $Enums.Materiales;
    stock?: Prisma.IntFilter<"Productos"> | number;
    imagen_url?: Prisma.StringNullableFilter<"Productos"> | string | null;
    categoria?: Prisma.XOR<Prisma.CategoriasScalarRelationFilter, Prisma.CategoriasWhereInput>;
    alertas?: Prisma.Alerta_stockListRelationFilter;
    detalle_pedidos?: Prisma.Detalle_PedidosListRelationFilter;
    carritos?: Prisma.CarritoListRelationFilter;
};
export type ProductosOrderByWithRelationInput = {
    id_producto?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    imagen_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoria?: Prisma.CategoriasOrderByWithRelationInput;
    alertas?: Prisma.Alerta_stockOrderByRelationAggregateInput;
    detalle_pedidos?: Prisma.Detalle_PedidosOrderByRelationAggregateInput;
    carritos?: Prisma.CarritoOrderByRelationAggregateInput;
};
export type ProductosWhereUniqueInput = Prisma.AtLeast<{
    id_producto?: number;
    AND?: Prisma.ProductosWhereInput | Prisma.ProductosWhereInput[];
    OR?: Prisma.ProductosWhereInput[];
    NOT?: Prisma.ProductosWhereInput | Prisma.ProductosWhereInput[];
    id_categoria?: Prisma.IntFilter<"Productos"> | number;
    nombre?: Prisma.StringFilter<"Productos"> | string;
    descripcion?: Prisma.StringNullableFilter<"Productos"> | string | null;
    precio?: Prisma.DecimalFilter<"Productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFilter<"Productos"> | $Enums.Materiales;
    stock?: Prisma.IntFilter<"Productos"> | number;
    imagen_url?: Prisma.StringNullableFilter<"Productos"> | string | null;
    categoria?: Prisma.XOR<Prisma.CategoriasScalarRelationFilter, Prisma.CategoriasWhereInput>;
    alertas?: Prisma.Alerta_stockListRelationFilter;
    detalle_pedidos?: Prisma.Detalle_PedidosListRelationFilter;
    carritos?: Prisma.CarritoListRelationFilter;
}, "id_producto">;
export type ProductosOrderByWithAggregationInput = {
    id_producto?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    imagen_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ProductosCountOrderByAggregateInput;
    _avg?: Prisma.ProductosAvgOrderByAggregateInput;
    _max?: Prisma.ProductosMaxOrderByAggregateInput;
    _min?: Prisma.ProductosMinOrderByAggregateInput;
    _sum?: Prisma.ProductosSumOrderByAggregateInput;
};
export type ProductosScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductosScalarWhereWithAggregatesInput | Prisma.ProductosScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductosScalarWhereWithAggregatesInput | Prisma.ProductosScalarWhereWithAggregatesInput[];
    id_producto?: Prisma.IntWithAggregatesFilter<"Productos"> | number;
    id_categoria?: Prisma.IntWithAggregatesFilter<"Productos"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Productos"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"Productos"> | string | null;
    precio?: Prisma.DecimalWithAggregatesFilter<"Productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesWithAggregatesFilter<"Productos"> | $Enums.Materiales;
    stock?: Prisma.IntWithAggregatesFilter<"Productos"> | number;
    imagen_url?: Prisma.StringNullableWithAggregatesFilter<"Productos"> | string | null;
};
export type ProductosCreateInput = {
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: $Enums.Materiales;
    stock: number;
    imagen_url?: string | null;
    categoria: Prisma.CategoriasCreateNestedOneWithoutProductosInput;
    alertas?: Prisma.Alerta_stockCreateNestedManyWithoutProductoInput;
    detalle_pedidos?: Prisma.Detalle_PedidosCreateNestedManyWithoutProductoInput;
    carritos?: Prisma.CarritoCreateNestedManyWithoutProductoInput;
};
export type ProductosUncheckedCreateInput = {
    id_producto?: number;
    id_categoria: number;
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: $Enums.Materiales;
    stock: number;
    imagen_url?: string | null;
    alertas?: Prisma.Alerta_stockUncheckedCreateNestedManyWithoutProductoInput;
    detalle_pedidos?: Prisma.Detalle_PedidosUncheckedCreateNestedManyWithoutProductoInput;
    carritos?: Prisma.CarritoUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductosUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.CategoriasUpdateOneRequiredWithoutProductosNestedInput;
    alertas?: Prisma.Alerta_stockUpdateManyWithoutProductoNestedInput;
    detalle_pedidos?: Prisma.Detalle_PedidosUpdateManyWithoutProductoNestedInput;
    carritos?: Prisma.CarritoUpdateManyWithoutProductoNestedInput;
};
export type ProductosUncheckedUpdateInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alertas?: Prisma.Alerta_stockUncheckedUpdateManyWithoutProductoNestedInput;
    detalle_pedidos?: Prisma.Detalle_PedidosUncheckedUpdateManyWithoutProductoNestedInput;
    carritos?: Prisma.CarritoUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductosCreateManyInput = {
    id_producto?: number;
    id_categoria: number;
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: $Enums.Materiales;
    stock: number;
    imagen_url?: string | null;
};
export type ProductosUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProductosUncheckedUpdateManyInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProductosListRelationFilter = {
    every?: Prisma.ProductosWhereInput;
    some?: Prisma.ProductosWhereInput;
    none?: Prisma.ProductosWhereInput;
};
export type ProductosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductosCountOrderByAggregateInput = {
    id_producto?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    imagen_url?: Prisma.SortOrder;
};
export type ProductosAvgOrderByAggregateInput = {
    id_producto?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductosMaxOrderByAggregateInput = {
    id_producto?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    imagen_url?: Prisma.SortOrder;
};
export type ProductosMinOrderByAggregateInput = {
    id_producto?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    imagen_url?: Prisma.SortOrder;
};
export type ProductosSumOrderByAggregateInput = {
    id_producto?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductosScalarRelationFilter = {
    is?: Prisma.ProductosWhereInput;
    isNot?: Prisma.ProductosWhereInput;
};
export type ProductosCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutCategoriaInput, Prisma.ProductosUncheckedCreateWithoutCategoriaInput> | Prisma.ProductosCreateWithoutCategoriaInput[] | Prisma.ProductosUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutCategoriaInput | Prisma.ProductosCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.ProductosCreateManyCategoriaInputEnvelope;
    connect?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
};
export type ProductosUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutCategoriaInput, Prisma.ProductosUncheckedCreateWithoutCategoriaInput> | Prisma.ProductosCreateWithoutCategoriaInput[] | Prisma.ProductosUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutCategoriaInput | Prisma.ProductosCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.ProductosCreateManyCategoriaInputEnvelope;
    connect?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
};
export type ProductosUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutCategoriaInput, Prisma.ProductosUncheckedCreateWithoutCategoriaInput> | Prisma.ProductosCreateWithoutCategoriaInput[] | Prisma.ProductosUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutCategoriaInput | Prisma.ProductosCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.ProductosUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.ProductosUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.ProductosCreateManyCategoriaInputEnvelope;
    set?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    disconnect?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    delete?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    connect?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    update?: Prisma.ProductosUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.ProductosUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.ProductosUpdateManyWithWhereWithoutCategoriaInput | Prisma.ProductosUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.ProductosScalarWhereInput | Prisma.ProductosScalarWhereInput[];
};
export type ProductosUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutCategoriaInput, Prisma.ProductosUncheckedCreateWithoutCategoriaInput> | Prisma.ProductosCreateWithoutCategoriaInput[] | Prisma.ProductosUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutCategoriaInput | Prisma.ProductosCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.ProductosUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.ProductosUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.ProductosCreateManyCategoriaInputEnvelope;
    set?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    disconnect?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    delete?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    connect?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    update?: Prisma.ProductosUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.ProductosUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.ProductosUpdateManyWithWhereWithoutCategoriaInput | Prisma.ProductosUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.ProductosScalarWhereInput | Prisma.ProductosScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumMaterialesFieldUpdateOperationsInput = {
    set?: $Enums.Materiales;
};
export type ProductosCreateNestedOneWithoutAlertasInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutAlertasInput, Prisma.ProductosUncheckedCreateWithoutAlertasInput>;
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutAlertasInput;
    connect?: Prisma.ProductosWhereUniqueInput;
};
export type ProductosUpdateOneRequiredWithoutAlertasNestedInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutAlertasInput, Prisma.ProductosUncheckedCreateWithoutAlertasInput>;
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutAlertasInput;
    upsert?: Prisma.ProductosUpsertWithoutAlertasInput;
    connect?: Prisma.ProductosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductosUpdateToOneWithWhereWithoutAlertasInput, Prisma.ProductosUpdateWithoutAlertasInput>, Prisma.ProductosUncheckedUpdateWithoutAlertasInput>;
};
export type ProductosCreateNestedOneWithoutDetalle_pedidosInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutDetalle_pedidosInput, Prisma.ProductosUncheckedCreateWithoutDetalle_pedidosInput>;
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutDetalle_pedidosInput;
    connect?: Prisma.ProductosWhereUniqueInput;
};
export type ProductosUpdateOneRequiredWithoutDetalle_pedidosNestedInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutDetalle_pedidosInput, Prisma.ProductosUncheckedCreateWithoutDetalle_pedidosInput>;
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutDetalle_pedidosInput;
    upsert?: Prisma.ProductosUpsertWithoutDetalle_pedidosInput;
    connect?: Prisma.ProductosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductosUpdateToOneWithWhereWithoutDetalle_pedidosInput, Prisma.ProductosUpdateWithoutDetalle_pedidosInput>, Prisma.ProductosUncheckedUpdateWithoutDetalle_pedidosInput>;
};
export type ProductosCreateNestedOneWithoutCarritosInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutCarritosInput, Prisma.ProductosUncheckedCreateWithoutCarritosInput>;
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutCarritosInput;
    connect?: Prisma.ProductosWhereUniqueInput;
};
export type ProductosUpdateOneRequiredWithoutCarritosNestedInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutCarritosInput, Prisma.ProductosUncheckedCreateWithoutCarritosInput>;
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutCarritosInput;
    upsert?: Prisma.ProductosUpsertWithoutCarritosInput;
    connect?: Prisma.ProductosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductosUpdateToOneWithWhereWithoutCarritosInput, Prisma.ProductosUpdateWithoutCarritosInput>, Prisma.ProductosUncheckedUpdateWithoutCarritosInput>;
};
export type ProductosCreateWithoutCategoriaInput = {
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: $Enums.Materiales;
    stock: number;
    imagen_url?: string | null;
    alertas?: Prisma.Alerta_stockCreateNestedManyWithoutProductoInput;
    detalle_pedidos?: Prisma.Detalle_PedidosCreateNestedManyWithoutProductoInput;
    carritos?: Prisma.CarritoCreateNestedManyWithoutProductoInput;
};
export type ProductosUncheckedCreateWithoutCategoriaInput = {
    id_producto?: number;
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: $Enums.Materiales;
    stock: number;
    imagen_url?: string | null;
    alertas?: Prisma.Alerta_stockUncheckedCreateNestedManyWithoutProductoInput;
    detalle_pedidos?: Prisma.Detalle_PedidosUncheckedCreateNestedManyWithoutProductoInput;
    carritos?: Prisma.CarritoUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductosCreateOrConnectWithoutCategoriaInput = {
    where: Prisma.ProductosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductosCreateWithoutCategoriaInput, Prisma.ProductosUncheckedCreateWithoutCategoriaInput>;
};
export type ProductosCreateManyCategoriaInputEnvelope = {
    data: Prisma.ProductosCreateManyCategoriaInput | Prisma.ProductosCreateManyCategoriaInput[];
    skipDuplicates?: boolean;
};
export type ProductosUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.ProductosWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductosUpdateWithoutCategoriaInput, Prisma.ProductosUncheckedUpdateWithoutCategoriaInput>;
    create: Prisma.XOR<Prisma.ProductosCreateWithoutCategoriaInput, Prisma.ProductosUncheckedCreateWithoutCategoriaInput>;
};
export type ProductosUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.ProductosWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductosUpdateWithoutCategoriaInput, Prisma.ProductosUncheckedUpdateWithoutCategoriaInput>;
};
export type ProductosUpdateManyWithWhereWithoutCategoriaInput = {
    where: Prisma.ProductosScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductosUpdateManyMutationInput, Prisma.ProductosUncheckedUpdateManyWithoutCategoriaInput>;
};
export type ProductosScalarWhereInput = {
    AND?: Prisma.ProductosScalarWhereInput | Prisma.ProductosScalarWhereInput[];
    OR?: Prisma.ProductosScalarWhereInput[];
    NOT?: Prisma.ProductosScalarWhereInput | Prisma.ProductosScalarWhereInput[];
    id_producto?: Prisma.IntFilter<"Productos"> | number;
    id_categoria?: Prisma.IntFilter<"Productos"> | number;
    nombre?: Prisma.StringFilter<"Productos"> | string;
    descripcion?: Prisma.StringNullableFilter<"Productos"> | string | null;
    precio?: Prisma.DecimalFilter<"Productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFilter<"Productos"> | $Enums.Materiales;
    stock?: Prisma.IntFilter<"Productos"> | number;
    imagen_url?: Prisma.StringNullableFilter<"Productos"> | string | null;
};
export type ProductosCreateWithoutAlertasInput = {
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: $Enums.Materiales;
    stock: number;
    imagen_url?: string | null;
    categoria: Prisma.CategoriasCreateNestedOneWithoutProductosInput;
    detalle_pedidos?: Prisma.Detalle_PedidosCreateNestedManyWithoutProductoInput;
    carritos?: Prisma.CarritoCreateNestedManyWithoutProductoInput;
};
export type ProductosUncheckedCreateWithoutAlertasInput = {
    id_producto?: number;
    id_categoria: number;
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: $Enums.Materiales;
    stock: number;
    imagen_url?: string | null;
    detalle_pedidos?: Prisma.Detalle_PedidosUncheckedCreateNestedManyWithoutProductoInput;
    carritos?: Prisma.CarritoUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductosCreateOrConnectWithoutAlertasInput = {
    where: Prisma.ProductosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductosCreateWithoutAlertasInput, Prisma.ProductosUncheckedCreateWithoutAlertasInput>;
};
export type ProductosUpsertWithoutAlertasInput = {
    update: Prisma.XOR<Prisma.ProductosUpdateWithoutAlertasInput, Prisma.ProductosUncheckedUpdateWithoutAlertasInput>;
    create: Prisma.XOR<Prisma.ProductosCreateWithoutAlertasInput, Prisma.ProductosUncheckedCreateWithoutAlertasInput>;
    where?: Prisma.ProductosWhereInput;
};
export type ProductosUpdateToOneWithWhereWithoutAlertasInput = {
    where?: Prisma.ProductosWhereInput;
    data: Prisma.XOR<Prisma.ProductosUpdateWithoutAlertasInput, Prisma.ProductosUncheckedUpdateWithoutAlertasInput>;
};
export type ProductosUpdateWithoutAlertasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.CategoriasUpdateOneRequiredWithoutProductosNestedInput;
    detalle_pedidos?: Prisma.Detalle_PedidosUpdateManyWithoutProductoNestedInput;
    carritos?: Prisma.CarritoUpdateManyWithoutProductoNestedInput;
};
export type ProductosUncheckedUpdateWithoutAlertasInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detalle_pedidos?: Prisma.Detalle_PedidosUncheckedUpdateManyWithoutProductoNestedInput;
    carritos?: Prisma.CarritoUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductosCreateWithoutDetalle_pedidosInput = {
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: $Enums.Materiales;
    stock: number;
    imagen_url?: string | null;
    categoria: Prisma.CategoriasCreateNestedOneWithoutProductosInput;
    alertas?: Prisma.Alerta_stockCreateNestedManyWithoutProductoInput;
    carritos?: Prisma.CarritoCreateNestedManyWithoutProductoInput;
};
export type ProductosUncheckedCreateWithoutDetalle_pedidosInput = {
    id_producto?: number;
    id_categoria: number;
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: $Enums.Materiales;
    stock: number;
    imagen_url?: string | null;
    alertas?: Prisma.Alerta_stockUncheckedCreateNestedManyWithoutProductoInput;
    carritos?: Prisma.CarritoUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductosCreateOrConnectWithoutDetalle_pedidosInput = {
    where: Prisma.ProductosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductosCreateWithoutDetalle_pedidosInput, Prisma.ProductosUncheckedCreateWithoutDetalle_pedidosInput>;
};
export type ProductosUpsertWithoutDetalle_pedidosInput = {
    update: Prisma.XOR<Prisma.ProductosUpdateWithoutDetalle_pedidosInput, Prisma.ProductosUncheckedUpdateWithoutDetalle_pedidosInput>;
    create: Prisma.XOR<Prisma.ProductosCreateWithoutDetalle_pedidosInput, Prisma.ProductosUncheckedCreateWithoutDetalle_pedidosInput>;
    where?: Prisma.ProductosWhereInput;
};
export type ProductosUpdateToOneWithWhereWithoutDetalle_pedidosInput = {
    where?: Prisma.ProductosWhereInput;
    data: Prisma.XOR<Prisma.ProductosUpdateWithoutDetalle_pedidosInput, Prisma.ProductosUncheckedUpdateWithoutDetalle_pedidosInput>;
};
export type ProductosUpdateWithoutDetalle_pedidosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.CategoriasUpdateOneRequiredWithoutProductosNestedInput;
    alertas?: Prisma.Alerta_stockUpdateManyWithoutProductoNestedInput;
    carritos?: Prisma.CarritoUpdateManyWithoutProductoNestedInput;
};
export type ProductosUncheckedUpdateWithoutDetalle_pedidosInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alertas?: Prisma.Alerta_stockUncheckedUpdateManyWithoutProductoNestedInput;
    carritos?: Prisma.CarritoUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductosCreateWithoutCarritosInput = {
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: $Enums.Materiales;
    stock: number;
    imagen_url?: string | null;
    categoria: Prisma.CategoriasCreateNestedOneWithoutProductosInput;
    alertas?: Prisma.Alerta_stockCreateNestedManyWithoutProductoInput;
    detalle_pedidos?: Prisma.Detalle_PedidosCreateNestedManyWithoutProductoInput;
};
export type ProductosUncheckedCreateWithoutCarritosInput = {
    id_producto?: number;
    id_categoria: number;
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: $Enums.Materiales;
    stock: number;
    imagen_url?: string | null;
    alertas?: Prisma.Alerta_stockUncheckedCreateNestedManyWithoutProductoInput;
    detalle_pedidos?: Prisma.Detalle_PedidosUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductosCreateOrConnectWithoutCarritosInput = {
    where: Prisma.ProductosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductosCreateWithoutCarritosInput, Prisma.ProductosUncheckedCreateWithoutCarritosInput>;
};
export type ProductosUpsertWithoutCarritosInput = {
    update: Prisma.XOR<Prisma.ProductosUpdateWithoutCarritosInput, Prisma.ProductosUncheckedUpdateWithoutCarritosInput>;
    create: Prisma.XOR<Prisma.ProductosCreateWithoutCarritosInput, Prisma.ProductosUncheckedCreateWithoutCarritosInput>;
    where?: Prisma.ProductosWhereInput;
};
export type ProductosUpdateToOneWithWhereWithoutCarritosInput = {
    where?: Prisma.ProductosWhereInput;
    data: Prisma.XOR<Prisma.ProductosUpdateWithoutCarritosInput, Prisma.ProductosUncheckedUpdateWithoutCarritosInput>;
};
export type ProductosUpdateWithoutCarritosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.CategoriasUpdateOneRequiredWithoutProductosNestedInput;
    alertas?: Prisma.Alerta_stockUpdateManyWithoutProductoNestedInput;
    detalle_pedidos?: Prisma.Detalle_PedidosUpdateManyWithoutProductoNestedInput;
};
export type ProductosUncheckedUpdateWithoutCarritosInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alertas?: Prisma.Alerta_stockUncheckedUpdateManyWithoutProductoNestedInput;
    detalle_pedidos?: Prisma.Detalle_PedidosUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductosCreateManyCategoriaInput = {
    id_producto?: number;
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: $Enums.Materiales;
    stock: number;
    imagen_url?: string | null;
};
export type ProductosUpdateWithoutCategoriaInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alertas?: Prisma.Alerta_stockUpdateManyWithoutProductoNestedInput;
    detalle_pedidos?: Prisma.Detalle_PedidosUpdateManyWithoutProductoNestedInput;
    carritos?: Prisma.CarritoUpdateManyWithoutProductoNestedInput;
};
export type ProductosUncheckedUpdateWithoutCategoriaInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alertas?: Prisma.Alerta_stockUncheckedUpdateManyWithoutProductoNestedInput;
    detalle_pedidos?: Prisma.Detalle_PedidosUncheckedUpdateManyWithoutProductoNestedInput;
    carritos?: Prisma.CarritoUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductosUncheckedUpdateManyWithoutCategoriaInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.EnumMaterialesFieldUpdateOperationsInput | $Enums.Materiales;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type ProductosCountOutputType
 */
export type ProductosCountOutputType = {
    alertas: number;
    detalle_pedidos: number;
    carritos: number;
};
export type ProductosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alertas?: boolean | ProductosCountOutputTypeCountAlertasArgs;
    detalle_pedidos?: boolean | ProductosCountOutputTypeCountDetalle_pedidosArgs;
    carritos?: boolean | ProductosCountOutputTypeCountCarritosArgs;
};
/**
 * ProductosCountOutputType without action
 */
export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductosCountOutputType
     */
    select?: Prisma.ProductosCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProductosCountOutputType without action
 */
export type ProductosCountOutputTypeCountAlertasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Alerta_stockWhereInput;
};
/**
 * ProductosCountOutputType without action
 */
export type ProductosCountOutputTypeCountDetalle_pedidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Detalle_PedidosWhereInput;
};
/**
 * ProductosCountOutputType without action
 */
export type ProductosCountOutputTypeCountCarritosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarritoWhereInput;
};
export type ProductosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_producto?: boolean;
    id_categoria?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    material?: boolean;
    stock?: boolean;
    imagen_url?: boolean;
    categoria?: boolean | Prisma.CategoriasDefaultArgs<ExtArgs>;
    alertas?: boolean | Prisma.Productos$alertasArgs<ExtArgs>;
    detalle_pedidos?: boolean | Prisma.Productos$detalle_pedidosArgs<ExtArgs>;
    carritos?: boolean | Prisma.Productos$carritosArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productos"]>;
export type ProductosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_producto?: boolean;
    id_categoria?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    material?: boolean;
    stock?: boolean;
    imagen_url?: boolean;
    categoria?: boolean | Prisma.CategoriasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productos"]>;
export type ProductosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_producto?: boolean;
    id_categoria?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    material?: boolean;
    stock?: boolean;
    imagen_url?: boolean;
    categoria?: boolean | Prisma.CategoriasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productos"]>;
export type ProductosSelectScalar = {
    id_producto?: boolean;
    id_categoria?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    material?: boolean;
    stock?: boolean;
    imagen_url?: boolean;
};
export type ProductosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_producto" | "id_categoria" | "nombre" | "descripcion" | "precio" | "material" | "stock" | "imagen_url", ExtArgs["result"]["productos"]>;
export type ProductosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoria?: boolean | Prisma.CategoriasDefaultArgs<ExtArgs>;
    alertas?: boolean | Prisma.Productos$alertasArgs<ExtArgs>;
    detalle_pedidos?: boolean | Prisma.Productos$detalle_pedidosArgs<ExtArgs>;
    carritos?: boolean | Prisma.Productos$carritosArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoria?: boolean | Prisma.CategoriasDefaultArgs<ExtArgs>;
};
export type ProductosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoria?: boolean | Prisma.CategoriasDefaultArgs<ExtArgs>;
};
export type $ProductosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Productos";
    objects: {
        categoria: Prisma.$CategoriasPayload<ExtArgs>;
        alertas: Prisma.$Alerta_stockPayload<ExtArgs>[];
        detalle_pedidos: Prisma.$Detalle_PedidosPayload<ExtArgs>[];
        carritos: Prisma.$CarritoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_producto: number;
        id_categoria: number;
        nombre: string;
        descripcion: string | null;
        precio: runtime.Decimal;
        material: $Enums.Materiales;
        stock: number;
        imagen_url: string | null;
    }, ExtArgs["result"]["productos"]>;
    composites: {};
};
export type ProductosGetPayload<S extends boolean | null | undefined | ProductosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductosPayload, S>;
export type ProductosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductosCountAggregateInputType | true;
};
export interface ProductosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Productos'];
        meta: {
            name: 'Productos';
        };
    };
    /**
     * Find zero or one Productos that matches the filter.
     * @param {ProductosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductosFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductosFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductosFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     *
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     *
     * // Only select the `id_producto`
     * const productosWithId_productoOnly = await prisma.productos.findMany({ select: { id_producto: true } })
     *
     */
    findMany<T extends ProductosFindManyArgs>(args?: Prisma.SelectSubset<T, ProductosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Productos.
     * @param {ProductosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     *
     */
    create<T extends ProductosCreateArgs>(args: Prisma.SelectSubset<T, ProductosCreateArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Productos.
     * @param {ProductosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductosCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductosCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Productos and only return the `id_producto`
     * const productosWithId_productoOnly = await prisma.productos.createManyAndReturn({
     *   select: { id_producto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Productos.
     * @param {ProductosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     *
     */
    delete<T extends ProductosDeleteArgs>(args: Prisma.SelectSubset<T, ProductosDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Productos.
     * @param {ProductosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductosUpdateArgs>(args: Prisma.SelectSubset<T, ProductosUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Productos.
     * @param {ProductosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductosDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductosUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductosUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Productos and only return the `id_producto`
     * const productosWithId_productoOnly = await prisma.productos.updateManyAndReturn({
     *   select: { id_producto: true },
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
    updateManyAndReturn<T extends ProductosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Productos.
     * @param {ProductosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends ProductosUpsertArgs>(args: Prisma.SelectSubset<T, ProductosUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductosCountArgs>(args?: Prisma.Subset<T, ProductosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductosCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductosAggregateArgs>(args: Prisma.Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>;
    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProductosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductosGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Productos model
     */
    readonly fields: ProductosFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Productos.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProductosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categoria<T extends Prisma.CategoriasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriasDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriasClient<runtime.Types.Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    alertas<T extends Prisma.Productos$alertasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Productos$alertasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    detalle_pedidos<T extends Prisma.Productos$detalle_pedidosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Productos$detalle_pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Detalle_PedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    carritos<T extends Prisma.Productos$carritosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Productos$carritosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Productos model
 */
export interface ProductosFieldRefs {
    readonly id_producto: Prisma.FieldRef<"Productos", 'Int'>;
    readonly id_categoria: Prisma.FieldRef<"Productos", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Productos", 'String'>;
    readonly descripcion: Prisma.FieldRef<"Productos", 'String'>;
    readonly precio: Prisma.FieldRef<"Productos", 'Decimal'>;
    readonly material: Prisma.FieldRef<"Productos", 'Materiales'>;
    readonly stock: Prisma.FieldRef<"Productos", 'Int'>;
    readonly imagen_url: Prisma.FieldRef<"Productos", 'String'>;
}
/**
 * Productos findUnique
 */
export type ProductosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    /**
     * Filter, which Productos to fetch.
     */
    where: Prisma.ProductosWhereUniqueInput;
};
/**
 * Productos findUniqueOrThrow
 */
export type ProductosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    /**
     * Filter, which Productos to fetch.
     */
    where: Prisma.ProductosWhereUniqueInput;
};
/**
 * Productos findFirst
 */
export type ProductosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    /**
     * Filter, which Productos to fetch.
     */
    where?: Prisma.ProductosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Productos to fetch.
     */
    orderBy?: Prisma.ProductosOrderByWithRelationInput | Prisma.ProductosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Productos.
     */
    cursor?: Prisma.ProductosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Productos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Productos.
     */
    distinct?: Prisma.ProductosScalarFieldEnum | Prisma.ProductosScalarFieldEnum[];
};
/**
 * Productos findFirstOrThrow
 */
export type ProductosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    /**
     * Filter, which Productos to fetch.
     */
    where?: Prisma.ProductosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Productos to fetch.
     */
    orderBy?: Prisma.ProductosOrderByWithRelationInput | Prisma.ProductosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Productos.
     */
    cursor?: Prisma.ProductosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Productos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Productos.
     */
    distinct?: Prisma.ProductosScalarFieldEnum | Prisma.ProductosScalarFieldEnum[];
};
/**
 * Productos findMany
 */
export type ProductosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    /**
     * Filter, which Productos to fetch.
     */
    where?: Prisma.ProductosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Productos to fetch.
     */
    orderBy?: Prisma.ProductosOrderByWithRelationInput | Prisma.ProductosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Productos.
     */
    cursor?: Prisma.ProductosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Productos.
     */
    skip?: number;
    distinct?: Prisma.ProductosScalarFieldEnum | Prisma.ProductosScalarFieldEnum[];
};
/**
 * Productos create
 */
export type ProductosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    /**
     * The data needed to create a Productos.
     */
    data: Prisma.XOR<Prisma.ProductosCreateInput, Prisma.ProductosUncheckedCreateInput>;
};
/**
 * Productos createMany
 */
export type ProductosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: Prisma.ProductosCreateManyInput | Prisma.ProductosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Productos createManyAndReturn
 */
export type ProductosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * The data used to create many Productos.
     */
    data: Prisma.ProductosCreateManyInput | Prisma.ProductosCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Productos update
 */
export type ProductosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    /**
     * The data needed to update a Productos.
     */
    data: Prisma.XOR<Prisma.ProductosUpdateInput, Prisma.ProductosUncheckedUpdateInput>;
    /**
     * Choose, which Productos to update.
     */
    where: Prisma.ProductosWhereUniqueInput;
};
/**
 * Productos updateMany
 */
export type ProductosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: Prisma.XOR<Prisma.ProductosUpdateManyMutationInput, Prisma.ProductosUncheckedUpdateManyInput>;
    /**
     * Filter which Productos to update
     */
    where?: Prisma.ProductosWhereInput;
    /**
     * Limit how many Productos to update.
     */
    limit?: number;
};
/**
 * Productos updateManyAndReturn
 */
export type ProductosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * The data used to update Productos.
     */
    data: Prisma.XOR<Prisma.ProductosUpdateManyMutationInput, Prisma.ProductosUncheckedUpdateManyInput>;
    /**
     * Filter which Productos to update
     */
    where?: Prisma.ProductosWhereInput;
    /**
     * Limit how many Productos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Productos upsert
 */
export type ProductosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    /**
     * The filter to search for the Productos to update in case it exists.
     */
    where: Prisma.ProductosWhereUniqueInput;
    /**
     * In case the Productos found by the `where` argument doesn't exist, create a new Productos with this data.
     */
    create: Prisma.XOR<Prisma.ProductosCreateInput, Prisma.ProductosUncheckedCreateInput>;
    /**
     * In case the Productos was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProductosUpdateInput, Prisma.ProductosUncheckedUpdateInput>;
};
/**
 * Productos delete
 */
export type ProductosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    /**
     * Filter which Productos to delete.
     */
    where: Prisma.ProductosWhereUniqueInput;
};
/**
 * Productos deleteMany
 */
export type ProductosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: Prisma.ProductosWhereInput;
    /**
     * Limit how many Productos to delete.
     */
    limit?: number;
};
/**
 * Productos.alertas
 */
export type Productos$alertasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_stock
     */
    select?: Prisma.Alerta_stockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerta_stock
     */
    omit?: Prisma.Alerta_stockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Alerta_stockInclude<ExtArgs> | null;
    where?: Prisma.Alerta_stockWhereInput;
    orderBy?: Prisma.Alerta_stockOrderByWithRelationInput | Prisma.Alerta_stockOrderByWithRelationInput[];
    cursor?: Prisma.Alerta_stockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Alerta_stockScalarFieldEnum | Prisma.Alerta_stockScalarFieldEnum[];
};
/**
 * Productos.detalle_pedidos
 */
export type Productos$detalle_pedidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Productos.carritos
 */
export type Productos$carritosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.CarritoWhereInput;
    orderBy?: Prisma.CarritoOrderByWithRelationInput | Prisma.CarritoOrderByWithRelationInput[];
    cursor?: Prisma.CarritoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarritoScalarFieldEnum | Prisma.CarritoScalarFieldEnum[];
};
/**
 * Productos without action
 */
export type ProductosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Productos.d.ts.map