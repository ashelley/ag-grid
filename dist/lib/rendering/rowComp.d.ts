// Type definitions for ag-grid v17.1.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { CellComp } from "./cellComp";
import { RowNode } from "../entities/rowNode";
import { GridOptionsWrapper } from "../gridOptionsWrapper";
import { Column } from "../entities/column";
import { ICellRendererParams } from "./cellRenderers/iCellRenderer";
import { RowContainerComponent } from "./rowContainerComponent";
import { Component } from "../widgets/component";
import { Beans } from "./beans";
export declare class LoadingCellRenderer extends Component {
    private static TEMPLATE;
    gridOptionsWrapper: GridOptionsWrapper;
    private eLoadingIcon;
    private eLoadingText;
    constructor();
    init(params: ICellRendererParams): void;
    refresh(params: any): boolean;
}
export declare class RowComp extends Component {
    static DOM_DATA_KEY_RENDERED_ROW: string;
    private static FULL_WIDTH_CELL_RENDERER;
    private static GROUP_ROW_RENDERER;
    private static GROUP_ROW_RENDERER_COMP_NAME;
    private static LOADING_CELL_RENDERER;
    private static LOADING_CELL_RENDERER_COMP_NAME;
    private static DETAIL_CELL_RENDERER;
    private static DETAIL_CELL_RENDERER_COMP_NAME;
    private rowNode;
    private beans;
    private ePinnedLeftRow;
    private ePinnedRightRow;
    private eBodyRow;
    private eAllRowContainers;
    private eFullWidthRow;
    private eFullWidthRowBody;
    private eFullWidthRowLeft;
    private eFullWidthRowRight;
    private bodyContainerComp;
    private fullWidthContainerComp;
    private pinnedLeftContainerComp;
    private pinnedRightContainerComp;
    private fullWidthRowComponent;
    private fullWidthRowComponentBody;
    private fullWidthRowComponentLeft;
    private fullWidthRowComponentRight;
    private active;
    private fullWidthRow;
    private fullWidthRowEmbedded;
    private editingRow;
    private rowFocused;
    private columnRefreshPending;
    private cellComps;
    private createSecondPassFuncs;
    private removeFirstPassFuncs;
    private removeSecondPassFuncs;
    private fadeRowIn;
    private slideRowIn;
    private useAnimationFrameForCreate;
    private rowIsEven;
    private paginationPage;
    private parentScope;
    private scope;
    private initialised;
    constructor(parentScope: any, bodyContainerComp: RowContainerComponent, pinnedLeftContainerComp: RowContainerComponent, pinnedRightContainerComp: RowContainerComponent, fullWidthContainerComp: RowContainerComponent, rowNode: RowNode, beans: Beans, animateIn: boolean, useAnimationFrameForCreate: boolean);
    init(): void;
    private createTemplate(contents, extraCssClass?);
    getCellForCol(column: Column): HTMLElement;
    afterFlush(): void;
    private executeProcessRowPostCreateFunc();
    private getInitialRowTopStyle();
    private getRowBusinessKey();
    private lazyCreateCells(cols, eRow);
    private createRowContainer(rowContainerComp, cols, callback);
    private createChildScopeOrNull(data);
    private setupRowContainers();
    private setupNormalRowContainers();
    private createFullWidthRows(type, name);
    private addMouseWheelListenerToFullWidthRow();
    private setAnimateFlags(animateIn);
    isEditing(): boolean;
    stopRowEditing(cancel: boolean): void;
    isFullWidth(): boolean;
    private addListeners();
    private onGridColumnsChanged();
    private onRowNodeDataChanged(event);
    private onRowNodeCellChanged(event);
    private postProcessCss();
    private onRowNodeDraggingChanged();
    private postProcessRowDragging();
    private onExpandedChanged();
    private onDisplayedColumnsChanged();
    private destroyFullWidthComponents();
    private getContainerForCell(pinnedType);
    private onVirtualColumnsChanged();
    private onColumnResized();
    private refreshCells();
    private refreshCellsInAnimationFrame();
    private removeRenderedCells(colIds);
    private isCellEligibleToBeRemoved(indexStr);
    private ensureCellInCorrectContainer(cellComp);
    private isCellInWrongRow(cellComp);
    private insertCellsIntoContainer(eRow, cols);
    private addDomData(eRowContainer);
    private createNewCell(col, eContainer, cellTemplates, newCellComps);
    onMouseEvent(eventName: string, mouseEvent: MouseEvent): void;
    private createRowEvent(type, domEvent?);
    private createRowEventWithSource(type, domEvent);
    private onRowDblClick(mouseEvent);
    onRowClick(mouseEvent: MouseEvent): void;
    private createFullWidthRowContainer(rowContainerComp, pinned, extraCssClass, cellRendererType, cellRendererName, eRowCallback, cellRendererCallback);
    private angular1Compile(element);
    private createFullWidthParams(eRow, pinned);
    private getInitialRowClasses(extraCssClass);
    private preProcessRowClassRules();
    private processRowClassRules(onApplicableClass, onNotApplicableClass?);
    stopEditing(cancel?: boolean): void;
    private setEditingRow(value);
    startRowEditing(keyPress?: number, charPress?: string, sourceRenderedCell?: CellComp): void;
    forEachCellComp(callback: (renderedCell: CellComp) => void): void;
    private postProcessClassesFromGridOptions();
    private postProcessRowClassRules();
    private processClassesFromGridOptions();
    private preProcessStylesFromGridOptions();
    private postProcessStylesFromGridOptions();
    private processStylesFromGridOptions();
    private createCells(cols);
    private onRowSelected();
    private callAfterRowAttachedOnCells(newCellComps, eRow);
    private afterRowAttached(rowContainerComp, eRow);
    private addHoverFunctionality(eRow);
    private roundRowTopToBounds(rowTop);
    private onRowHeightChanged();
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    destroy(animate?: boolean): void;
    private destroyContainingCells();
    getAndClearDelayedDestroyFunctions(): Function[];
    private onCellFocusChanged();
    private onPaginationChanged();
    private onTopChanged();
    private applyPaginationOffset(topPx, reverse?);
    private setRowTop(pixels);
    getAndClearNextVMTurnFunctions(): Function[];
    getRowNode(): RowNode;
    getRenderedCellForColumn(column: Column): CellComp;
    private onRowIndexChanged();
    private updateRowIndexes();
    ensureDomOrder(): void;
    getPinnedLeftRowElement(): HTMLElement;
    getPinnedRightRowElement(): HTMLElement;
    getBodyRowElement(): HTMLElement;
    getFullWidthRowElement(): HTMLElement;
}
