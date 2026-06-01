import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Alerta_stock
 *
 */
export type Alerta_stockModel = runtime.Types.Result.DefaultSelection<Prisma.$Alerta_stockPayload>;
export type AggregateAlerta_stock = {
    _count: Alerta_stockCountAggregateOutputType | null;
    _avg: Alerta_stockAvgAggregateOutputType | null;
    _sum: Alerta_stockSumAggregateOutputType | null;
    _min: Alerta_stockMinAggregateOutputType | null;
    _max: Alerta_stockMaxAggregateOutputType | null;
};
export type Alerta_stockAvgAggregateOutputType = {
    id_alerta: number | null;
    id_producto: number | null;
    nivel_minimo: number | null;
};
export type Alerta_stockSumAggregateOutputType = {
    id_alerta: number | null;
    id_producto: number | null;
    nivel_minimo: number | null;
};
export type Alerta_stockMinAggregateOutputType = {
    id_alerta: number | null;
    id_producto: number | null;
    nivel_minimo: number | null;
    estado: $Enums.EstadoAlerta | null;
};
export type Alerta_stockMaxAggregateOutputType = {
    id_alerta: number | null;
    id_producto: number | null;
    nivel_minimo: number | null;
    estado: $Enums.EstadoAlerta | null;
};
export type Alerta_stockCountAggregateOutputType = {
    id_alerta: number;
    id_producto: number;
    nivel_minimo: number;
    estado: number;
    _all: number;
};
export type Alerta_stockAvgAggregateInputType = {
    id_alerta?: true;
    id_producto?: true;
    nivel_minimo?: true;
};
export type Alerta_stockSumAggregateInputType = {
    id_alerta?: true;
    id_producto?: true;
    nivel_minimo?: true;
};
export type Alerta_stockMinAggregateInputType = {
    id_alerta?: true;
    id_producto?: true;
    nivel_minimo?: true;
    estado?: true;
};
export type Alerta_stockMaxAggregateInputType = {
    id_alerta?: true;
    id_producto?: true;
    nivel_minimo?: true;
    estado?: true;
};
export type Alerta_stockCountAggregateInputType = {
    id_alerta?: true;
    id_producto?: true;
    nivel_minimo?: true;
    estado?: true;
    _all?: true;
};
export type Alerta_stockAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Alerta_stock to aggregate.
     */
    where?: Prisma.Alerta_stockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Alerta_stocks to fetch.
     */
    orderBy?: Prisma.Alerta_stockOrderByWithRelationInput | Prisma.Alerta_stockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Alerta_stockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Alerta_stocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Alerta_stocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Alerta_stocks
    **/
    _count?: true | Alerta_stockCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Alerta_stockAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Alerta_stockSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Alerta_stockMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Alerta_stockMaxAggregateInputType;
};
export type GetAlerta_stockAggregateType<T extends Alerta_stockAggregateArgs> = {
    [P in keyof T & keyof AggregateAlerta_stock]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlerta_stock[P]> : Prisma.GetScalarType<T[P], AggregateAlerta_stock[P]>;
};
export type Alerta_stockGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Alerta_stockWhereInput;
    orderBy?: Prisma.Alerta_stockOrderByWithAggregationInput | Prisma.Alerta_stockOrderByWithAggregationInput[];
    by: Prisma.Alerta_stockScalarFieldEnum[] | Prisma.Alerta_stockScalarFieldEnum;
    having?: Prisma.Alerta_stockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Alerta_stockCountAggregateInputType | true;
    _avg?: Alerta_stockAvgAggregateInputType;
    _sum?: Alerta_stockSumAggregateInputType;
    _min?: Alerta_stockMinAggregateInputType;
    _max?: Alerta_stockMaxAggregateInputType;
};
export type Alerta_stockGroupByOutputType = {
    id_alerta: number;
    id_producto: number;
    nivel_minimo: number;
    estado: $Enums.EstadoAlerta;
    _count: Alerta_stockCountAggregateOutputType | null;
    _avg: Alerta_stockAvgAggregateOutputType | null;
    _sum: Alerta_stockSumAggregateOutputType | null;
    _min: Alerta_stockMinAggregateOutputType | null;
    _max: Alerta_stockMaxAggregateOutputType | null;
};
type GetAlerta_stockGroupByPayload<T extends Alerta_stockGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Alerta_stockGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Alerta_stockGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Alerta_stockGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Alerta_stockGroupByOutputType[P]>;
}>>;
export type Alerta_stockWhereInput = {
    AND?: Prisma.Alerta_stockWhereInput | Prisma.Alerta_stockWhereInput[];
    OR?: Prisma.Alerta_stockWhereInput[];
    NOT?: Prisma.Alerta_stockWhereInput | Prisma.Alerta_stockWhereInput[];
    id_alerta?: Prisma.IntFilter<"Alerta_stock"> | number;
    id_producto?: Prisma.IntFilter<"Alerta_stock"> | number;
    nivel_minimo?: Prisma.IntFilter<"Alerta_stock"> | number;
    estado?: Prisma.EnumEstadoAlertaFilter<"Alerta_stock"> | $Enums.EstadoAlerta;
    producto?: Prisma.XOR<Prisma.ProductosScalarRelationFilter, Prisma.ProductosWhereInput>;
};
export type Alerta_stockOrderByWithRelationInput = {
    id_alerta?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    nivel_minimo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    producto?: Prisma.ProductosOrderByWithRelationInput;
};
export type Alerta_stockWhereUniqueInput = Prisma.AtLeast<{
    id_alerta?: number;
    AND?: Prisma.Alerta_stockWhereInput | Prisma.Alerta_stockWhereInput[];
    OR?: Prisma.Alerta_stockWhereInput[];
    NOT?: Prisma.Alerta_stockWhereInput | Prisma.Alerta_stockWhereInput[];
    id_producto?: Prisma.IntFilter<"Alerta_stock"> | number;
    nivel_minimo?: Prisma.IntFilter<"Alerta_stock"> | number;
    estado?: Prisma.EnumEstadoAlertaFilter<"Alerta_stock"> | $Enums.EstadoAlerta;
    producto?: Prisma.XOR<Prisma.ProductosScalarRelationFilter, Prisma.ProductosWhereInput>;
}, "id_alerta">;
export type Alerta_stockOrderByWithAggregationInput = {
    id_alerta?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    nivel_minimo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.Alerta_stockCountOrderByAggregateInput;
    _avg?: Prisma.Alerta_stockAvgOrderByAggregateInput;
    _max?: Prisma.Alerta_stockMaxOrderByAggregateInput;
    _min?: Prisma.Alerta_stockMinOrderByAggregateInput;
    _sum?: Prisma.Alerta_stockSumOrderByAggregateInput;
};
export type Alerta_stockScalarWhereWithAggregatesInput = {
    AND?: Prisma.Alerta_stockScalarWhereWithAggregatesInput | Prisma.Alerta_stockScalarWhereWithAggregatesInput[];
    OR?: Prisma.Alerta_stockScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Alerta_stockScalarWhereWithAggregatesInput | Prisma.Alerta_stockScalarWhereWithAggregatesInput[];
    id_alerta?: Prisma.IntWithAggregatesFilter<"Alerta_stock"> | number;
    id_producto?: Prisma.IntWithAggregatesFilter<"Alerta_stock"> | number;
    nivel_minimo?: Prisma.IntWithAggregatesFilter<"Alerta_stock"> | number;
    estado?: Prisma.EnumEstadoAlertaWithAggregatesFilter<"Alerta_stock"> | $Enums.EstadoAlerta;
};
export type Alerta_stockCreateInput = {
    nivel_minimo: number;
    estado: $Enums.EstadoAlerta;
    producto: Prisma.ProductosCreateNestedOneWithoutAlertasInput;
};
export type Alerta_stockUncheckedCreateInput = {
    id_alerta?: number;
    id_producto: number;
    nivel_minimo: number;
    estado: $Enums.EstadoAlerta;
};
export type Alerta_stockUpdateInput = {
    nivel_minimo?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta;
    producto?: Prisma.ProductosUpdateOneRequiredWithoutAlertasNestedInput;
};
export type Alerta_stockUncheckedUpdateInput = {
    id_alerta?: Prisma.IntFieldUpdateOperationsInput | number;
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    nivel_minimo?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta;
};
export type Alerta_stockCreateManyInput = {
    id_alerta?: number;
    id_producto: number;
    nivel_minimo: number;
    estado: $Enums.EstadoAlerta;
};
export type Alerta_stockUpdateManyMutationInput = {
    nivel_minimo?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta;
};
export type Alerta_stockUncheckedUpdateManyInput = {
    id_alerta?: Prisma.IntFieldUpdateOperationsInput | number;
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    nivel_minimo?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta;
};
export type Alerta_stockListRelationFilter = {
    every?: Prisma.Alerta_stockWhereInput;
    some?: Prisma.Alerta_stockWhereInput;
    none?: Prisma.Alerta_stockWhereInput;
};
export type Alerta_stockOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Alerta_stockCountOrderByAggregateInput = {
    id_alerta?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    nivel_minimo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type Alerta_stockAvgOrderByAggregateInput = {
    id_alerta?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    nivel_minimo?: Prisma.SortOrder;
};
export type Alerta_stockMaxOrderByAggregateInput = {
    id_alerta?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    nivel_minimo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type Alerta_stockMinOrderByAggregateInput = {
    id_alerta?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    nivel_minimo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type Alerta_stockSumOrderByAggregateInput = {
    id_alerta?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    nivel_minimo?: Prisma.SortOrder;
};
export type Alerta_stockCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.Alerta_stockCreateWithoutProductoInput, Prisma.Alerta_stockUncheckedCreateWithoutProductoInput> | Prisma.Alerta_stockCreateWithoutProductoInput[] | Prisma.Alerta_stockUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.Alerta_stockCreateOrConnectWithoutProductoInput | Prisma.Alerta_stockCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.Alerta_stockCreateManyProductoInputEnvelope;
    connect?: Prisma.Alerta_stockWhereUniqueInput | Prisma.Alerta_stockWhereUniqueInput[];
};
export type Alerta_stockUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.Alerta_stockCreateWithoutProductoInput, Prisma.Alerta_stockUncheckedCreateWithoutProductoInput> | Prisma.Alerta_stockCreateWithoutProductoInput[] | Prisma.Alerta_stockUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.Alerta_stockCreateOrConnectWithoutProductoInput | Prisma.Alerta_stockCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.Alerta_stockCreateManyProductoInputEnvelope;
    connect?: Prisma.Alerta_stockWhereUniqueInput | Prisma.Alerta_stockWhereUniqueInput[];
};
export type Alerta_stockUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.Alerta_stockCreateWithoutProductoInput, Prisma.Alerta_stockUncheckedCreateWithoutProductoInput> | Prisma.Alerta_stockCreateWithoutProductoInput[] | Prisma.Alerta_stockUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.Alerta_stockCreateOrConnectWithoutProductoInput | Prisma.Alerta_stockCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.Alerta_stockUpsertWithWhereUniqueWithoutProductoInput | Prisma.Alerta_stockUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.Alerta_stockCreateManyProductoInputEnvelope;
    set?: Prisma.Alerta_stockWhereUniqueInput | Prisma.Alerta_stockWhereUniqueInput[];
    disconnect?: Prisma.Alerta_stockWhereUniqueInput | Prisma.Alerta_stockWhereUniqueInput[];
    delete?: Prisma.Alerta_stockWhereUniqueInput | Prisma.Alerta_stockWhereUniqueInput[];
    connect?: Prisma.Alerta_stockWhereUniqueInput | Prisma.Alerta_stockWhereUniqueInput[];
    update?: Prisma.Alerta_stockUpdateWithWhereUniqueWithoutProductoInput | Prisma.Alerta_stockUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.Alerta_stockUpdateManyWithWhereWithoutProductoInput | Prisma.Alerta_stockUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.Alerta_stockScalarWhereInput | Prisma.Alerta_stockScalarWhereInput[];
};
export type Alerta_stockUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.Alerta_stockCreateWithoutProductoInput, Prisma.Alerta_stockUncheckedCreateWithoutProductoInput> | Prisma.Alerta_stockCreateWithoutProductoInput[] | Prisma.Alerta_stockUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.Alerta_stockCreateOrConnectWithoutProductoInput | Prisma.Alerta_stockCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.Alerta_stockUpsertWithWhereUniqueWithoutProductoInput | Prisma.Alerta_stockUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.Alerta_stockCreateManyProductoInputEnvelope;
    set?: Prisma.Alerta_stockWhereUniqueInput | Prisma.Alerta_stockWhereUniqueInput[];
    disconnect?: Prisma.Alerta_stockWhereUniqueInput | Prisma.Alerta_stockWhereUniqueInput[];
    delete?: Prisma.Alerta_stockWhereUniqueInput | Prisma.Alerta_stockWhereUniqueInput[];
    connect?: Prisma.Alerta_stockWhereUniqueInput | Prisma.Alerta_stockWhereUniqueInput[];
    update?: Prisma.Alerta_stockUpdateWithWhereUniqueWithoutProductoInput | Prisma.Alerta_stockUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.Alerta_stockUpdateManyWithWhereWithoutProductoInput | Prisma.Alerta_stockUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.Alerta_stockScalarWhereInput | Prisma.Alerta_stockScalarWhereInput[];
};
export type EnumEstadoAlertaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoAlerta;
};
export type Alerta_stockCreateWithoutProductoInput = {
    nivel_minimo: number;
    estado: $Enums.EstadoAlerta;
};
export type Alerta_stockUncheckedCreateWithoutProductoInput = {
    id_alerta?: number;
    nivel_minimo: number;
    estado: $Enums.EstadoAlerta;
};
export type Alerta_stockCreateOrConnectWithoutProductoInput = {
    where: Prisma.Alerta_stockWhereUniqueInput;
    create: Prisma.XOR<Prisma.Alerta_stockCreateWithoutProductoInput, Prisma.Alerta_stockUncheckedCreateWithoutProductoInput>;
};
export type Alerta_stockCreateManyProductoInputEnvelope = {
    data: Prisma.Alerta_stockCreateManyProductoInput | Prisma.Alerta_stockCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type Alerta_stockUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.Alerta_stockWhereUniqueInput;
    update: Prisma.XOR<Prisma.Alerta_stockUpdateWithoutProductoInput, Prisma.Alerta_stockUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.Alerta_stockCreateWithoutProductoInput, Prisma.Alerta_stockUncheckedCreateWithoutProductoInput>;
};
export type Alerta_stockUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.Alerta_stockWhereUniqueInput;
    data: Prisma.XOR<Prisma.Alerta_stockUpdateWithoutProductoInput, Prisma.Alerta_stockUncheckedUpdateWithoutProductoInput>;
};
export type Alerta_stockUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.Alerta_stockScalarWhereInput;
    data: Prisma.XOR<Prisma.Alerta_stockUpdateManyMutationInput, Prisma.Alerta_stockUncheckedUpdateManyWithoutProductoInput>;
};
export type Alerta_stockScalarWhereInput = {
    AND?: Prisma.Alerta_stockScalarWhereInput | Prisma.Alerta_stockScalarWhereInput[];
    OR?: Prisma.Alerta_stockScalarWhereInput[];
    NOT?: Prisma.Alerta_stockScalarWhereInput | Prisma.Alerta_stockScalarWhereInput[];
    id_alerta?: Prisma.IntFilter<"Alerta_stock"> | number;
    id_producto?: Prisma.IntFilter<"Alerta_stock"> | number;
    nivel_minimo?: Prisma.IntFilter<"Alerta_stock"> | number;
    estado?: Prisma.EnumEstadoAlertaFilter<"Alerta_stock"> | $Enums.EstadoAlerta;
};
export type Alerta_stockCreateManyProductoInput = {
    id_alerta?: number;
    nivel_minimo: number;
    estado: $Enums.EstadoAlerta;
};
export type Alerta_stockUpdateWithoutProductoInput = {
    nivel_minimo?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta;
};
export type Alerta_stockUncheckedUpdateWithoutProductoInput = {
    id_alerta?: Prisma.IntFieldUpdateOperationsInput | number;
    nivel_minimo?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta;
};
export type Alerta_stockUncheckedUpdateManyWithoutProductoInput = {
    id_alerta?: Prisma.IntFieldUpdateOperationsInput | number;
    nivel_minimo?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta;
};
export type Alerta_stockSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_alerta?: boolean;
    id_producto?: boolean;
    nivel_minimo?: boolean;
    estado?: boolean;
    producto?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alerta_stock"]>;
export type Alerta_stockSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_alerta?: boolean;
    id_producto?: boolean;
    nivel_minimo?: boolean;
    estado?: boolean;
    producto?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alerta_stock"]>;
export type Alerta_stockSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_alerta?: boolean;
    id_producto?: boolean;
    nivel_minimo?: boolean;
    estado?: boolean;
    producto?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alerta_stock"]>;
export type Alerta_stockSelectScalar = {
    id_alerta?: boolean;
    id_producto?: boolean;
    nivel_minimo?: boolean;
    estado?: boolean;
};
export type Alerta_stockOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_alerta" | "id_producto" | "nivel_minimo" | "estado", ExtArgs["result"]["alerta_stock"]>;
export type Alerta_stockInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
};
export type Alerta_stockIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
};
export type Alerta_stockIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
};
export type $Alerta_stockPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Alerta_stock";
    objects: {
        producto: Prisma.$ProductosPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_alerta: number;
        id_producto: number;
        nivel_minimo: number;
        estado: $Enums.EstadoAlerta;
    }, ExtArgs["result"]["alerta_stock"]>;
    composites: {};
};
export type Alerta_stockGetPayload<S extends boolean | null | undefined | Alerta_stockDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload, S>;
export type Alerta_stockCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Alerta_stockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Alerta_stockCountAggregateInputType | true;
};
export interface Alerta_stockDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Alerta_stock'];
        meta: {
            name: 'Alerta_stock';
        };
    };
    /**
     * Find zero or one Alerta_stock that matches the filter.
     * @param {Alerta_stockFindUniqueArgs} args - Arguments to find a Alerta_stock
     * @example
     * // Get one Alerta_stock
     * const alerta_stock = await prisma.alerta_stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Alerta_stockFindUniqueArgs>(args: Prisma.SelectSubset<T, Alerta_stockFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Alerta_stockClient<runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Alerta_stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Alerta_stockFindUniqueOrThrowArgs} args - Arguments to find a Alerta_stock
     * @example
     * // Get one Alerta_stock
     * const alerta_stock = await prisma.alerta_stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Alerta_stockFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Alerta_stockFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Alerta_stockClient<runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alerta_stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_stockFindFirstArgs} args - Arguments to find a Alerta_stock
     * @example
     * // Get one Alerta_stock
     * const alerta_stock = await prisma.alerta_stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Alerta_stockFindFirstArgs>(args?: Prisma.SelectSubset<T, Alerta_stockFindFirstArgs<ExtArgs>>): Prisma.Prisma__Alerta_stockClient<runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alerta_stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_stockFindFirstOrThrowArgs} args - Arguments to find a Alerta_stock
     * @example
     * // Get one Alerta_stock
     * const alerta_stock = await prisma.alerta_stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Alerta_stockFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Alerta_stockFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Alerta_stockClient<runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Alerta_stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_stockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerta_stocks
     * const alerta_stocks = await prisma.alerta_stock.findMany()
     *
     * // Get first 10 Alerta_stocks
     * const alerta_stocks = await prisma.alerta_stock.findMany({ take: 10 })
     *
     * // Only select the `id_alerta`
     * const alerta_stockWithId_alertaOnly = await prisma.alerta_stock.findMany({ select: { id_alerta: true } })
     *
     */
    findMany<T extends Alerta_stockFindManyArgs>(args?: Prisma.SelectSubset<T, Alerta_stockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Alerta_stock.
     * @param {Alerta_stockCreateArgs} args - Arguments to create a Alerta_stock.
     * @example
     * // Create one Alerta_stock
     * const Alerta_stock = await prisma.alerta_stock.create({
     *   data: {
     *     // ... data to create a Alerta_stock
     *   }
     * })
     *
     */
    create<T extends Alerta_stockCreateArgs>(args: Prisma.SelectSubset<T, Alerta_stockCreateArgs<ExtArgs>>): Prisma.Prisma__Alerta_stockClient<runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Alerta_stocks.
     * @param {Alerta_stockCreateManyArgs} args - Arguments to create many Alerta_stocks.
     * @example
     * // Create many Alerta_stocks
     * const alerta_stock = await prisma.alerta_stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Alerta_stockCreateManyArgs>(args?: Prisma.SelectSubset<T, Alerta_stockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Alerta_stocks and returns the data saved in the database.
     * @param {Alerta_stockCreateManyAndReturnArgs} args - Arguments to create many Alerta_stocks.
     * @example
     * // Create many Alerta_stocks
     * const alerta_stock = await prisma.alerta_stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Alerta_stocks and only return the `id_alerta`
     * const alerta_stockWithId_alertaOnly = await prisma.alerta_stock.createManyAndReturn({
     *   select: { id_alerta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Alerta_stockCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Alerta_stockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Alerta_stock.
     * @param {Alerta_stockDeleteArgs} args - Arguments to delete one Alerta_stock.
     * @example
     * // Delete one Alerta_stock
     * const Alerta_stock = await prisma.alerta_stock.delete({
     *   where: {
     *     // ... filter to delete one Alerta_stock
     *   }
     * })
     *
     */
    delete<T extends Alerta_stockDeleteArgs>(args: Prisma.SelectSubset<T, Alerta_stockDeleteArgs<ExtArgs>>): Prisma.Prisma__Alerta_stockClient<runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Alerta_stock.
     * @param {Alerta_stockUpdateArgs} args - Arguments to update one Alerta_stock.
     * @example
     * // Update one Alerta_stock
     * const alerta_stock = await prisma.alerta_stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Alerta_stockUpdateArgs>(args: Prisma.SelectSubset<T, Alerta_stockUpdateArgs<ExtArgs>>): Prisma.Prisma__Alerta_stockClient<runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Alerta_stocks.
     * @param {Alerta_stockDeleteManyArgs} args - Arguments to filter Alerta_stocks to delete.
     * @example
     * // Delete a few Alerta_stocks
     * const { count } = await prisma.alerta_stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Alerta_stockDeleteManyArgs>(args?: Prisma.SelectSubset<T, Alerta_stockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alerta_stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_stockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerta_stocks
     * const alerta_stock = await prisma.alerta_stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Alerta_stockUpdateManyArgs>(args: Prisma.SelectSubset<T, Alerta_stockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alerta_stocks and returns the data updated in the database.
     * @param {Alerta_stockUpdateManyAndReturnArgs} args - Arguments to update many Alerta_stocks.
     * @example
     * // Update many Alerta_stocks
     * const alerta_stock = await prisma.alerta_stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Alerta_stocks and only return the `id_alerta`
     * const alerta_stockWithId_alertaOnly = await prisma.alerta_stock.updateManyAndReturn({
     *   select: { id_alerta: true },
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
    updateManyAndReturn<T extends Alerta_stockUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Alerta_stockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Alerta_stock.
     * @param {Alerta_stockUpsertArgs} args - Arguments to update or create a Alerta_stock.
     * @example
     * // Update or create a Alerta_stock
     * const alerta_stock = await prisma.alerta_stock.upsert({
     *   create: {
     *     // ... data to create a Alerta_stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alerta_stock we want to update
     *   }
     * })
     */
    upsert<T extends Alerta_stockUpsertArgs>(args: Prisma.SelectSubset<T, Alerta_stockUpsertArgs<ExtArgs>>): Prisma.Prisma__Alerta_stockClient<runtime.Types.Result.GetResult<Prisma.$Alerta_stockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Alerta_stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_stockCountArgs} args - Arguments to filter Alerta_stocks to count.
     * @example
     * // Count the number of Alerta_stocks
     * const count = await prisma.alerta_stock.count({
     *   where: {
     *     // ... the filter for the Alerta_stocks we want to count
     *   }
     * })
    **/
    count<T extends Alerta_stockCountArgs>(args?: Prisma.Subset<T, Alerta_stockCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Alerta_stockCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Alerta_stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_stockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Alerta_stockAggregateArgs>(args: Prisma.Subset<T, Alerta_stockAggregateArgs>): Prisma.PrismaPromise<GetAlerta_stockAggregateType<T>>;
    /**
     * Group by Alerta_stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_stockGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Alerta_stockGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Alerta_stockGroupByArgs['orderBy'];
    } : {
        orderBy?: Alerta_stockGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Alerta_stockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlerta_stockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Alerta_stock model
     */
    readonly fields: Alerta_stockFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Alerta_stock.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Alerta_stockClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the Alerta_stock model
 */
export interface Alerta_stockFieldRefs {
    readonly id_alerta: Prisma.FieldRef<"Alerta_stock", 'Int'>;
    readonly id_producto: Prisma.FieldRef<"Alerta_stock", 'Int'>;
    readonly nivel_minimo: Prisma.FieldRef<"Alerta_stock", 'Int'>;
    readonly estado: Prisma.FieldRef<"Alerta_stock", 'EstadoAlerta'>;
}
/**
 * Alerta_stock findUnique
 */
export type Alerta_stockFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Alerta_stock to fetch.
     */
    where: Prisma.Alerta_stockWhereUniqueInput;
};
/**
 * Alerta_stock findUniqueOrThrow
 */
export type Alerta_stockFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Alerta_stock to fetch.
     */
    where: Prisma.Alerta_stockWhereUniqueInput;
};
/**
 * Alerta_stock findFirst
 */
export type Alerta_stockFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Alerta_stock to fetch.
     */
    where?: Prisma.Alerta_stockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Alerta_stocks to fetch.
     */
    orderBy?: Prisma.Alerta_stockOrderByWithRelationInput | Prisma.Alerta_stockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Alerta_stocks.
     */
    cursor?: Prisma.Alerta_stockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Alerta_stocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Alerta_stocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Alerta_stocks.
     */
    distinct?: Prisma.Alerta_stockScalarFieldEnum | Prisma.Alerta_stockScalarFieldEnum[];
};
/**
 * Alerta_stock findFirstOrThrow
 */
export type Alerta_stockFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Alerta_stock to fetch.
     */
    where?: Prisma.Alerta_stockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Alerta_stocks to fetch.
     */
    orderBy?: Prisma.Alerta_stockOrderByWithRelationInput | Prisma.Alerta_stockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Alerta_stocks.
     */
    cursor?: Prisma.Alerta_stockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Alerta_stocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Alerta_stocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Alerta_stocks.
     */
    distinct?: Prisma.Alerta_stockScalarFieldEnum | Prisma.Alerta_stockScalarFieldEnum[];
};
/**
 * Alerta_stock findMany
 */
export type Alerta_stockFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Alerta_stocks to fetch.
     */
    where?: Prisma.Alerta_stockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Alerta_stocks to fetch.
     */
    orderBy?: Prisma.Alerta_stockOrderByWithRelationInput | Prisma.Alerta_stockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Alerta_stocks.
     */
    cursor?: Prisma.Alerta_stockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Alerta_stocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Alerta_stocks.
     */
    skip?: number;
    distinct?: Prisma.Alerta_stockScalarFieldEnum | Prisma.Alerta_stockScalarFieldEnum[];
};
/**
 * Alerta_stock create
 */
export type Alerta_stockCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Alerta_stock.
     */
    data: Prisma.XOR<Prisma.Alerta_stockCreateInput, Prisma.Alerta_stockUncheckedCreateInput>;
};
/**
 * Alerta_stock createMany
 */
export type Alerta_stockCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerta_stocks.
     */
    data: Prisma.Alerta_stockCreateManyInput | Prisma.Alerta_stockCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Alerta_stock createManyAndReturn
 */
export type Alerta_stockCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_stock
     */
    select?: Prisma.Alerta_stockSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerta_stock
     */
    omit?: Prisma.Alerta_stockOmit<ExtArgs> | null;
    /**
     * The data used to create many Alerta_stocks.
     */
    data: Prisma.Alerta_stockCreateManyInput | Prisma.Alerta_stockCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Alerta_stockIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Alerta_stock update
 */
export type Alerta_stockUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Alerta_stock.
     */
    data: Prisma.XOR<Prisma.Alerta_stockUpdateInput, Prisma.Alerta_stockUncheckedUpdateInput>;
    /**
     * Choose, which Alerta_stock to update.
     */
    where: Prisma.Alerta_stockWhereUniqueInput;
};
/**
 * Alerta_stock updateMany
 */
export type Alerta_stockUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerta_stocks.
     */
    data: Prisma.XOR<Prisma.Alerta_stockUpdateManyMutationInput, Prisma.Alerta_stockUncheckedUpdateManyInput>;
    /**
     * Filter which Alerta_stocks to update
     */
    where?: Prisma.Alerta_stockWhereInput;
    /**
     * Limit how many Alerta_stocks to update.
     */
    limit?: number;
};
/**
 * Alerta_stock updateManyAndReturn
 */
export type Alerta_stockUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_stock
     */
    select?: Prisma.Alerta_stockSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerta_stock
     */
    omit?: Prisma.Alerta_stockOmit<ExtArgs> | null;
    /**
     * The data used to update Alerta_stocks.
     */
    data: Prisma.XOR<Prisma.Alerta_stockUpdateManyMutationInput, Prisma.Alerta_stockUncheckedUpdateManyInput>;
    /**
     * Filter which Alerta_stocks to update
     */
    where?: Prisma.Alerta_stockWhereInput;
    /**
     * Limit how many Alerta_stocks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Alerta_stockIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Alerta_stock upsert
 */
export type Alerta_stockUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Alerta_stock to update in case it exists.
     */
    where: Prisma.Alerta_stockWhereUniqueInput;
    /**
     * In case the Alerta_stock found by the `where` argument doesn't exist, create a new Alerta_stock with this data.
     */
    create: Prisma.XOR<Prisma.Alerta_stockCreateInput, Prisma.Alerta_stockUncheckedCreateInput>;
    /**
     * In case the Alerta_stock was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Alerta_stockUpdateInput, Prisma.Alerta_stockUncheckedUpdateInput>;
};
/**
 * Alerta_stock delete
 */
export type Alerta_stockDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Alerta_stock to delete.
     */
    where: Prisma.Alerta_stockWhereUniqueInput;
};
/**
 * Alerta_stock deleteMany
 */
export type Alerta_stockDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Alerta_stocks to delete
     */
    where?: Prisma.Alerta_stockWhereInput;
    /**
     * Limit how many Alerta_stocks to delete.
     */
    limit?: number;
};
/**
 * Alerta_stock without action
 */
export type Alerta_stockDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Alerta_stock.d.ts.map